import { Container } from "../common/Container/styled";
import { StyledHeader } from "../common/StyledHeader/styled";
import { ErrorImage } from "./styled";
import errorImage from "./error.svg";

export const ErrorPage = () => {
  return (
    <Container error>
      <ErrorImage src={errorImage} />
      <StyledHeader error> Oops! Something went wrong...</StyledHeader>
    </Container>
  );
};
