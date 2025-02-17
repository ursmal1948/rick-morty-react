import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  ${({ loader }) =>
    loader &&
    css`
      padding: 0px 40px 50px;
    `}
  ${({ charactersListFlag, characterDetailsFlag, error }) =>
    (charactersListFlag || characterDetailsFlag || error) &&
    css`
      padding: 55px 35px 3px;
    `}
`;
