import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
  max-width: 100% !important;
  overflow-x: hidden !important ;
}

  body {
    ${({ theme }) => css`
      font-family: 'Roboto', sans-serif;
      background: ${theme.palette.common.primary};
      color: ${theme.palette.common.text};
      overflow-x: hidden;
   `}

    li {
      list-style: none;
    }
    
    a {
      text-decoration: none;
    }
  }
`