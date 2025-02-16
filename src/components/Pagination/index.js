import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  Wrapper,
  Button,
  PageNumber,
  PageIndicator,
  ButtonText,
} from "./styled";
import { BackwardVector, ForwardVector } from "./arrows";

const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const replaceQueryParameter = ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    const newSearch = searchParams.toString();
    return navigate(`${location.pathname}?${newSearch}`);
  };
  return replaceQueryParameter;
};

const Pagination = ({ page, totalPages }) => {
  const [width, setWidth] = useState(window.innerWidth);
  window.onresize = () => setWidth(window.innerWidth);

  const replaceQueryParameter = useReplaceQueryParameter();
  const currentPage = parseInt(page) < 1 ? 1 : parseInt(page);
  const firstPage = 1;
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const pages = totalPages;
  const lastPage = pages;

  const isScreenSmall = width < 767;

  const goToPage = (targetPage) => {
    replaceQueryParameter({
      key: "page",
      value: targetPage,
    });

    // window.scrollTo({
    //     top: 0,
    //     behavior: "smooth"
    // })
  };

  return (
    <Wrapper>
      <Button
        onClick={() => goToPage(firstPage)}
        disabled={currentPage === 1 ? true : false}
      >
        <BackwardVector disabled={currentPage === 1 ? true : false} />
        {isScreenSmall && (
          <BackwardVector disabled={currentPage === 1 ? true : false} />
        )}
        <ButtonText>First</ButtonText>
      </Button>

      <Button
        onClick={() => goToPage(previousPage)}
        disabled={currentPage === 1 ? true : false}
      >
        <BackwardVector disabled={currentPage === 1 ? true : false} />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageIndicator>
        <PageNumber>{currentPage} </PageNumber> of{" "}
        <PageNumber>{pages}</PageNumber>
      </PageIndicator>

      <Button
        onClick={() => goToPage(nextPage)}
        disabled={currentPage === pages ? true : false}
      >
        <ButtonText>Next</ButtonText>
        <ForwardVector disabled={currentPage === pages ? true : false} />
      </Button>

      <Button
        onClick={() => goToPage(lastPage)}
        disabled={currentPage === pages ? true : false}
      >
        <ButtonText>Last</ButtonText>
        <ForwardVector disabled={currentPage === pages ? true : false} />
        {isScreenSmall && (
          <ForwardVector disabled={currentPage === pages ? true : false} />
        )}
      </Button>
    </Wrapper>
  );
};

export default Pagination;
