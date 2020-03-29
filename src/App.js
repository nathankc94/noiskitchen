import React from 'react';
import { createGlobalStyle } from "styled-components"
import { Navbar } from "./Navbar/navbar";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
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
    <Navbar/>
    <h1>Noi's Kitchen</h1>
   <div>Food are here</div>

   </>
  );
}

export default App;
