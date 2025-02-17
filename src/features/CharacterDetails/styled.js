import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const TileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: start;
`;
export const ExtraContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -8px;
  margin-bottom: -45px;
`;

export const StyledButton = styled(Button)`
  background-color: #81d4fa;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  // transition: background-color 0.3s ease;
  margin-top: 25px;

  @media (max-width: 500px) {
    // font-size:15px;
    // width: 100%;
    // max-width: 280px;
    margin-bottom: 25px;
  }
`;
