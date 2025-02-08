import styled from "styled-components";

export const Wrapper = styled.div`

width:100%;
display:flex;
margin:40px auto;
justify-content:center;
align-items:center;
gap:12px;
`

export const Button = styled.button`
background:#d6e4ff;
 min-width: 76px;
  max-width: 108px;
  height: 36px;
  border-radius: 5px;
  white-space: nowrap;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color:black;
  display: flex;
  gap: 10px;
  align-items: center;
  border: none;
  cursor: pointer;

  &:disabled {
  background-color:#E4E6F0;
  cursor:default;
  }
`

export const PageNumber = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: black;
`;

export const TextButton = styled.span`
`

export const PageIndicator = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
  margin-left: 12px;
  margin-right: 12px;
white-space: nowrap;
`