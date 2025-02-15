import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 40px auto;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
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

  &:disabled {
    background-color: #e4e6f0;
    cursor: default;
  }
  &:not(:disabled):hover {
    background: #99e0ff;
  }

  @media (max-width: 767px) {
    height: 24px;
    max-width: 38px;
    min-width: 29px;
    padding: 8px 5px;
  }
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
