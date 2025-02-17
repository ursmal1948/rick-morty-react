import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "semantic-ui-react";
import { getCharacterDetails } from "../api/apiData";
import { StyledHeader } from "../../components/common/StyledHeader/styled";
import { StyledButton } from "../../components/common/StyledButton/styled";
import { Container } from "../../components/common/Container/styled";
import { Loader } from "../../components/Loader";
import {
  StyledCard,
  StyledImage,
  CardContent,
  CardHeader,
  CardDetail,
  StyledParagraph,
} from "../../components/common/CharacterCard/styled";

import { ExtraContent } from "./styled";
import { ErrorPage } from "../../components/ErrorPage";

const CharacterDetails = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);

      try {
        const characterDetails = await getCharacterDetails(id);
        if (characterDetails) {
          setCharacter(characterDetails);
          setStatus(characterDetails.status);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return loading ? (
    <Loader />
  ) : error ? (
    <ErrorPage />
  ) : (
    <Container characterDetailsFlag>
      <div>
        <StyledHeader characterDetailsFlag>Character's details</StyledHeader>
      </div>

      <StyledCard characterDetailsFlag key={character.id}>
        <StyledImage src={character.image} />
        <CardContent characterDetailsFlag>
          <CardHeader>{character.name}</CardHeader>
          <CardDetail>{character.species}</CardDetail>
          <Card.Description>
            <StyledParagraph>
              {status === "Alive"
                ? "✅ Alive"
                : status === "Dead"
                ? "❌ Dead"
                : "❓ Unknown"}{" "}
              | {character.gender}
              <ExtraContent>
                <p>
                  <p>Origin: {character.origin.name}</p>
                  <p> Location: {character.location.name}</p>
                  <p>Number of episodes: {character.episode.length}</p>
                  <p>
                    Created:{" "}
                    {new Date(character.created).toISOString().split("T")[0]}
                  </p>
                </p>
              </ExtraContent>
            </StyledParagraph>
          </Card.Description>
        </CardContent>
      </StyledCard>
      <StyledButton characterDetailsFlag onClick={() => navigate(-1)}>
        Return to Characters
      </StyledButton>
    </Container>
  );
};

export default CharacterDetails;
