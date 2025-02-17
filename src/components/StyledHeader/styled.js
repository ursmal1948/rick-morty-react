import styled, { css } from "styled-components";
import { Header } from "semantic-ui-react";

export const StyledHeader = styled(Header)`
  font-weight: 600;
  font-size: 36px;

  ${({ loader }) =>
    loader &&
    css`
      align-self: flex-start;
      margin: 4vh 14.3vw 6vw 14.3vw;

      @media (max-width: 500px) {
        font-size: 25px;
      }
    `}

  ${({ charactersListFlag, characterDetailsFlag }) =>
    (charactersListFlag || characterDetailsFlag) &&
    css`
      margin-bottom: 25px;
      @media (max-width: 500px) {
        font-size: 25px;
      }
    `}

    ${({ pageHeaderFlag }) =>
    pageHeaderFlag &&
    css`
      color: white;
      font-weight: 500;
      font-size: 24px;
    `}
`;
