import React from 'react';
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Abel', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Lobster', cursive;
  }
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <h1>Noi's Kitchen</h1>
   <div>Food are here</div>

   </>
  );
}

export default App;
