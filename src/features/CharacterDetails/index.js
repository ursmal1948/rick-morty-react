import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";
import { getCharacterDetails } from "../../features/api/apiData";
import { StyledHeader } from "../../components/StyledHeader/styled";
import { Loader } from "../../components/Loader";
import {
  StyledCard,
  StyledImage,
  CardContent,
  CardHeader,
  CardDetail,
  StyledParagraph,
  Container,
} from "../../features/CharactersList/styled";
import { ExtraContent } from "./styled";

const CharacterDetails = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const characterDetails = await getCharacterDetails(id);
      if (characterDetails) {
        setCharacter(characterDetails);
        setLoading(false);
        console.log(characterDetails.results);
      }
    };
    fetchData();
  }, [id]);

  return loading ? (
    <Loader />
  ) : (
    <Container characterDetailsFlag>
      <div>
        <StyledHeader characterDetailsFlag>CharacterDetails</StyledHeader>
      </div>

      <StyledCard characterDetailsFlag key={character.id}>
        <StyledImage src={character.image} />
        <CardContent>
          <CardHeader>{character.name}</CardHeader>
          <CardDetail>{character.species}</CardDetail>
          <Card.Description>
            <StyledParagraph characterDetailsFlag>
              {character.status === "Alive"
                ? "✅ Alive"
                : character.status === "Dead"
                ? "❌ Dead"
                : "❓ Unknown"}{" "}
              | {character.gender}
              <ExtraContent>
                <p>
                  <p>Origin: {character.origin.name}</p>
                  <p> Lcation : {character.location?.name}</p>
                  <p>Number of episodes: {character.episode.length}</p>
                  <p>Created: {character.created}</p>
                </p>
              </ExtraContent>
            </StyledParagraph>
          </Card.Description>
        </CardContent>
      </StyledCard>

      <Button onClick={() => navigate(-1)}>Go to last page</Button>
    </Container>
  );
};

export default CharacterDetails;
