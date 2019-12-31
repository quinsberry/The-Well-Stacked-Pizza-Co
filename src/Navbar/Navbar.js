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
  justify-content: space-between;
  
  @media only screen and (max-width: 425px) {
    flex-wrap: wrap;
  }
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
   margin-bottom: 5px;
 }
`;

const UserStatus = styled.div`
  color: white;
  font-size: 16px;
  margin-right: 30px;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;
const LogoutButton = styled.span`
  cursor: pointer;
  font-size: 12px;
  opacity: .8;
  transition: .2s;
  &:hover {
    opacity: .6;
  }
`;

export function Navbar({ login, loggedIn, logout }) {
  return (
    <NavbarStyled>
      <Logo>
        The Well Stacked Pizza Co.
        <span role="img" aria-label="pizza slice"> 🍕</span>
      </Logo>
      <UserStatus>
        {loggedIn === 'loading' ? 'Loading...' : (
          <>
            <i className="fas fa-user"></i>
            {" "}
            {loggedIn ? `Hello, ${loggedIn.displayName}!` : ""}
            {loggedIn ? (
              <LogoutButton onClick={logout}> Log out </LogoutButton>
            ) : (
                <LoginButton onClick={login}> Log In / Sign Up </LoginButton>
              )}
          </>
        )
        }
      </UserStatus>
    </NavbarStyled>
  );
}
