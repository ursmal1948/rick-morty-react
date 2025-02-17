import { useState } from "react";
import {
  Wrapper,
  PageNumber,
  PageIndicator,
  ButtonText,
} from "./styled";
import { StyledButton } from "../common/StyledButton/styled";
import { BackwardVector, ForwardVector } from "./arrows";
import { useReplaceQueryParameter } from "../../hooks/query/useReplaceQueryParameter";

const Pagination = ({ page, totalPages }) => {
  const [width, setWidth] = useState(window.innerWidth);
  window.onresize = () => setWidth(window.innerWidth);

  const replaceQueryParameter = useReplaceQueryParameter();
  const currentPage = page < 1 ? 1 : page;
  const firstPage = 1;
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const pages = totalPages;
  const lastPage = pages;

  const isScreenSmall = width < 767;

  const goToPage = (targetPage) => {
    if (targetPage < 1) targetPage = 1;
    if (targetPage > totalPages) targetPage = totalPages;

    replaceQueryParameter({
      key: "page",
      value: targetPage,
    });
  };
  return (
    <Wrapper>
      <StyledButton
        characterListFlag
        onClick={() => goToPage(firstPage)}
        disabled={currentPage === 1}
      >
        <BackwardVector disabled={currentPage === 1} />
        {isScreenSmall && <BackwardVector disabled={currentPage === 1} />}
        <ButtonText>First</ButtonText>
      </StyledButton>

      <StyledButton
        characterListFlag
        onClick={() => goToPage(previousPage)}
        disabled={currentPage === 1}
      >
        <BackwardVector disabled={currentPage === 1} />
        <ButtonText>Previous</ButtonText>
      </StyledButton>
      <PageIndicator>
        <PageNumber>{currentPage} </PageNumber> of{" "}
        <PageNumber>{pages}</PageNumber>
      </PageIndicator>

      <StyledButton
        characterListFlag
        onClick={() => goToPage(nextPage)}
        disabled={currentPage === pages}
      >
        <ButtonText>Next</ButtonText>
        <ForwardVector disabled={currentPage === pages} />
      </StyledButton>

      <StyledButton
        characterListFlag
        onClick={() => goToPage(lastPage)}
        disabled={currentPage === pages}
      >
        <ButtonText>Last</ButtonText>
        <ForwardVector disabled={currentPage === pages} />
        {isScreenSmall && <ForwardVector disabled={currentPage === pages} />}
      </StyledButton>
    </Wrapper>
  );
};

export default Pagination;
