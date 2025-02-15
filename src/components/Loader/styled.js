import styled from "styled-components";

export const Spinner = styled.div`
  width: 91px;
  height: 91px;
  border: 11.5px solid #ddddee;
  border-top-color: black;
  border-radius: 50%;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
