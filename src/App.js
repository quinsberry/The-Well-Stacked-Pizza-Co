import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>Welcome to PizzaShop</div>
      <h2>Hello</h2>
    </>
  );
}

export default App;
