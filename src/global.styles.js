import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 10px 60px;
        padding-bottom:0;

        @media screen and (max-width:800px) {
            padding:0px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;   /*to remove default box padding*/
    }
`