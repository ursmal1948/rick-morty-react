import { useLocation } from "react-router";
import { Container } from "../common/Container/styled";
import { StyledHeader } from "../common/StyledHeader/styled";
import { Spinner } from "./styled";

export const Loader = () => {
  const location = useLocation();
  const message = location.pathname.includes("characters/")
    ? "Loading character's details"
    : "Loading characters";

  return (
    <Container loader>
      <StyledHeader loader>{message}...</StyledHeader>
      <Spinner></Spinner>
    </Container>
  );
};
