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
  Container,
} from "./styled";
import { StyledHeader } from "../../components/StyledHeader/styled";
import { StatusDropdown } from "../../components/Dropdown";
import Pagination from "../../components/Pagination";
import { Loader } from "../../components/Loader";
import { useQueryParameter } from "../../hooks/query/useQueryParameter";

const CharactersList = () => {
  let page = parseInt(useQueryParameter("page"));
  const [totalPages, setTotalPages] = useState();

  if (!page || page < 1) page = 1;
  if (page > totalPages) page = totalPages;

  const location = useLocation();
  const status = useQueryParameter("status");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
        if (data) {
          setCharacters(data.results);
          setTotalPages(data.info.pages);
        }
      } catch (err) {
        setError(err);
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
          <StyledHeader charactersListFlag>List of characters</StyledHeader>
          <StatusDropdown dropdownId="dropdown1" />
        </Wrapper>
        <List>
          {characters.map((character) => (
            <StyledLink to={`/characters/${character.id}`} key={character.id}>
              <StyledCard>
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
