import styled from "styled-components";
import { Header } from "semantic-ui-react";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #00bfff, #ffd700);
  height: 92px;
`;

export const StyledPageHeader = styled(Header)`
  color: white;
  font-weight: 500;
  font-size: 24px;
`;
