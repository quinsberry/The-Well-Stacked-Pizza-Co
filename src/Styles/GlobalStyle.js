import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 4fr 1fr;
  max-width: 1300px;
  margin: auto;
  height: calc(100% + 20px);
`;

