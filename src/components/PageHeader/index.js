import { Wrapper } from "./styled";
import { StyledPageHeader } from "./styled";
const PageHeader = ({message}) => {
  return (
    <Wrapper>
      <StyledPageHeader>{message}</StyledPageHeader>
    </Wrapper>
  );
};

export default PageHeader;
