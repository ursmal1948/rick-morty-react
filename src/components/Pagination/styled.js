import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 40px auto;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const PageNumber = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: black;
`;

export const ButtonText = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const PageIndicator = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
  margin-left: 12px;
  margin-right: 12px;
  white-space: nowrap;
`;

export const VectoSvg = styled.svg`
  width: 7px;
  height: 12px;
  fill: none;
`;
