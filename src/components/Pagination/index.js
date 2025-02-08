import { useLocation, useNavigate } from "react-router-dom";

import { Wrapper, Button, PageNumber ,  PageIndicator,TextButton} from "./styled";

const useQueryParameter = (key) => {
    const location = useLocation();
    return new URLSearchParams(location.search).get(key);

}

const useReplaceQueryParameter = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const replaceQueryParameter = ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value == undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value)
        }
        const newSearch = searchParams.toString();
        return navigate(`${location.pathname}?${newSearch}`)

    }
    return replaceQueryParameter;

}

const Pagination = ({ page, totalPages }) => {

    const replaceQParameter = useReplaceQueryParameter();
    const currentPage = parseInt(page);
    const firstPage = 1;
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const pages = totalPages > 20 ? 20 : totalPages;
    const lastPage = pages;


    const goToPage = (targetPage) => {
        replaceQParameter({
            key:"page",
            value: targetPage,
        });
    };

    return (
        <Wrapper>
            <Button onClick={() => goToPage(firstPage)}
                disabled={currentPage===1?true:false}
                >

                First
            </Button>

            <Button onClick={() => goToPage(previousPage)}
                disabled={currentPage===1?true:false}
                >
                Previous
            </Button>
            <PageIndicator>
                <PageNumber>{currentPage} </PageNumber> of{" "}
                <PageNumber>{pages}</PageNumber>

            </PageIndicator>

            <Button onClick={() => goToPage(nextPage)}
                disabled={currentPage===20?true:false}
                >
                <TextButton>
                    Next
                </TextButton>

            </Button>

            <Button onClick={() => goToPage(lastPage)}
                disabled={currentPage===20?true:false}
                >

                Last
            </Button>


        </Wrapper>
    )

}

export default Pagination;