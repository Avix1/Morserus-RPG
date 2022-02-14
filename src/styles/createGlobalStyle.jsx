import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}

:root {
    --white-200: #E5E5E5;
    
    --dark-900: #000000;
    
    --orange-400: #FE270A;

}

body {
  min-width: 300px;
  min-height: 500px;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: "Inter", sans-serif;
  background-color: #000103;
  box-sizing: border-box;
  color: #ffffff;
} 

a {
  text-decoration: none;
  color: var(---dark-900)
}
`

export default GlobalStyle;