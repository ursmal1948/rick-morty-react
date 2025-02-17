import styled, { css } from "styled-components";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router";

export const StyledCard = styled(Card)`
  width: 100%;
  max-width: 330px;
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
  row-gap: 5px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  transition: transform 0.3s linear;
  padding: 15px;
  max-height: 430px;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }

  @media (max-width: 500px) {
    width: 100%;
    max-width: 280px;
  }

  ${({ characterDetailsFlag }) =>
    characterDetailsFlag &&
    css`
      max-width: 700px;
      grid-template-columns: auto 1fr;

      @media (max-width: 739px) {
        grid-template-columns: none;
        max-height: 730px;
        width: auto;
      }
    `}
`;

export const CardContent = styled(Card.Content)`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${({ characterDetailsFlag }) =>
    characterDetailsFlag &&
    css`
      margin-bottom: 10px;
    `}
`;

export const CardHeader = styled(Card.Header)`
  font-size: 22px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: center;
`;

export const CardDetail = styled(Card.Meta)`
  font-size: 16px;
  color: #7e839a;
`;
export const StyledParagraph = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  max-width: 100%;
  width: 300px;
  height: auto;
  border-radius: 5px;
`;
