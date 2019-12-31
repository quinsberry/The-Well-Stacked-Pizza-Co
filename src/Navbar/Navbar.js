import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 15px;
  position: fixed;
  width: 100%;
  z-index: 99;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 320px) {
    padding: 15px 10px;
  }
`;

const Logo = styled(Title)`
 font-size: 25px;
 color: white;
 text-shadow: 1px 3px 3px #380502;
 @media only screen and (max-width: 320px) {
   font-size: 22px;
 }
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        The Well Stacked Pizza Co.
        <span role="img" aria-label="pizza slice"> 🍕</span>
      </Logo>
    </NavbarStyled>
  );
}
