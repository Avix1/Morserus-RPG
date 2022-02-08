import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
  min-width: 300px;
  min-height: 500px;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: "Inter", sans-serif;
  margin: 0 0 0 0;
  padding: 0;
  background-color: #000103;
  box-sizing: border-box;
  transition: scroll ease 1s;
  color: #dddceb;
} 

ul[role=list],
ol[role=list] {
  list-style: none;
  margin: 0;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

html:focus-within {
  scroll-behavior: smooth;
}

a {
  color: #000103;;
  text-decoration: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

:focus {
  outline: none;
}
`

export default GlobalStyle;