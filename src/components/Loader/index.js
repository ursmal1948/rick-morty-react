import { useLocation } from "react-router-dom";
import { Container } from "../../features/CharactersList/styled";
import { Spinner } from "./styled";
import { StyledHeader } from "../StyledHeader/styled";

export const Loader = () => {
  const location = useLocation();
  const message = location.pathname.includes("characters/")
    ? "Loading character's details"
    : "Loading characters";

  return (
    <Container loader>
      <StyledHeader loader>
        {message}
        {"..."}
      </StyledHeader>
      <Spinner></Spinner>
    </Container>
  );
};
