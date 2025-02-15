import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,::after,::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    margin: 0 auto;
    color: #000000;
    background-color: #F5F5DC;
}`
;