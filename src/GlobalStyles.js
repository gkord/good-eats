import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  html {
    font-family: Helvetica, sans-serif;
  }
  h1 {
    font-size: 42px;
    font-family: 'Merriweather', serif;
    font-weight: 700;
  }
  h2 {
    text-align: center;
    text-transform: capitalize;
  }
  p, h3 {
    margin: 12px 0px;
  }
  h3 {
    font-size: 20px;
    font-family: 'Merriweather', serif;
  }
  .wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  }
`;

export default GlobalStyles;
