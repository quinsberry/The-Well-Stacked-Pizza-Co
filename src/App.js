import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Container>
        <Menu />
        <div>asdwdwdw</div>
      </Container>
    </>
  );
}

export default App;
