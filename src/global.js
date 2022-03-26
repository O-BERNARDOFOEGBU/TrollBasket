import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
}

html, body, #root {
    min-height: 100%;
    background: #FFFFFF;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 500;
    font-style: normal;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
}`;
export default GlobalStyles;
