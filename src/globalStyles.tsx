import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  body {
    min-width: 1900px;
    margin: 0;
    h2 {
      font-weight: 700;
    }
    a {
      &:hover {
        color: inherit;
        text-decoration: none;
      }
      color: inherit;
      text-decoration: none;
    }
    p {
      margin: 0;
    }
    button:focus {
      outline: none;
    }
  }
`;
