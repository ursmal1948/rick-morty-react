import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 150px;
`;

export const Option = styled.option``;
export const Select = styled.select`
  width: 100%;
  max-width: 144px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: 12px;
    padding: 6px;
    max-width: 120px;
  }
`;
