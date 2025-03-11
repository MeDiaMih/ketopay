import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    body {
        height: 100%;
        width: 100%;
        max-width: 360px;
        margin: 0 auto;
        padding: 0;
        background-color: #fff;
        font-family: Lato, sans-serif;
        font-size: 16px;
        font-weight: 400;
        border: 1px solid #EDEDED;
    }

    * {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;