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

  }
  p {
    margin: 10px 0px;
  }
  .wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px;
  }
`;

export default GlobalStyles;
