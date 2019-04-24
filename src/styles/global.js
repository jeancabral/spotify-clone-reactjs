import { createGlobalStyle } from 'styled-components';
import 'rc-slider/assets/index.css';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html, body, #root {
    height: 100%;
}

body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #1E1E1E;
    text-rendering: optimizeLegibility !important;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
}

::-webkit-scrollbar
{
  width: 12px;  /* for vertical scrollbars */
  height: 12px; /* for horizontal scrollbars */
}

::-webkit-scrollbar-track
{
  background: #181818;
}

::-webkit-scrollbar-thumb
{
  background: #666;
}

`;

export default GlobalStyle;
