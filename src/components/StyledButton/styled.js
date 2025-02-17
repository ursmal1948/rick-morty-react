import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background: #81d4fa;
  min-width: 76px;
  max-width: 120px;
  height: 36px;
  border-radius: 5px;
  white-space: nowrap;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: black;
  display: flex;
  gap: 10px;
  // padding:5px;
  align-items: center;
  border: none;
  cursor: pointer;

  ${({ characterDetailsFlag }) =>
    characterDetailsFlag &&
    css`
      max-width: 210px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 25px;
      margin-bottom: 10px;
      // max-width:auto;

      @media (max-width: 500px) {
      }
    `}

  ${({ characterListFlag }) =>
    characterListFlag &&
    css`
      @media (max-width: 767px) {
        height: 24px;
        max-width: 38px;
        min-width: 29px;
        padding: 8px 5px;
      }
    `}


  &:disabled {
    background-color: #e4e6f0;
    cursor: default;
  }
  &:not(:disabled):hover {
    background: #99e0ff;
  }
`;
