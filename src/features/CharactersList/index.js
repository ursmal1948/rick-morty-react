import React from "react";
import { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import { getCharactersByStatus, getCharacters } from "../api/apiData";
import {
  Wrapper,
  List,
  StyledCard,
  StyledLink,
  StyledImage,
  CardContent,
  CardHeader,
  CardDetail,
  StyledParagraph,
} from "./styled";
import { StyledHeader } from "../../components/StyledHeader/styled";
import { StatusDropdown } from "../../components/Dropdown";
import Pagination from "../../components/Pagination";
import { Container } from "./styled";
import { Loader } from "../../components/Loader";

const useQueryParameter = (key) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key);
};

const CharactersList = () => {
  let page = useQueryParameter("page");

  if (!page) page = 1;

  const location = useLocation();
  const status = useQueryParameter("status");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let data;
        const status = new URLSearchParams(location.search).get("status");
        if (status) {
          data = await getCharactersByStatus(status, page);
        } else {
          data = await getCharacters(page);
        }
        // }
        if (data) {
          setCharacters(data.results.slice(0, 20));
          setTotalPages(data.info.pages);
        }
      } catch (err) {
        setError(err);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [location.search, page, status]);

  return loading ? (
    <Loader />
  ) : (
    <Container charactersListFlag>
      <div>
        <Wrapper>
          <StyledHeader charactersListFlag>Characters' list</StyledHeader>
          <StatusDropdown />
        </Wrapper>
        <List>
          {characters.map((character) => (
            <StyledLink to={`/characters/${character.id}`}>
              <StyledCard key={character.id}>
                <StyledImage src={character.image} />
                <CardContent>
                  <CardHeader>{character.name}</CardHeader>
                  <CardDetail>{character.species}</CardDetail>
                  <Card.Description>
                    <StyledParagraph>
                      {character.status === "Alive"
                        ? "✅ Alive"
                        : character.status === "Dead"
                        ? "❌ Dead"
                        : "❓ Unknown"}{" "}
                      | {character.gender}
                    </StyledParagraph>
                  </Card.Description>
                </CardContent>
              </StyledCard>
            </StyledLink>
          ))}
        </List>
        <Pagination page={page} totalPages={totalPages} />
      </div>
    </Container>
  );
};

export default CharactersList;
