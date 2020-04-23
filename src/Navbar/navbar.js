import React from "react";
import styled from "styled-components";
import "./style.css"
import { Title } from "../Style/Title";

// const NavbarStyled = styled.div`
//   z-index: 999;
// `;
const Logo = styled.div`
  font-size: 25px;
  font-family: 'Lobster', cursive;
  text-shadow: 1px 1px 4px black;
  text-decoration: underline;
  text-color: white;
`;
const UserStatus = styled(Title)`
  color: white;
  font-size: 15px;
  margin-right: 5px;
  text-shadow: 1px 1px 4px black;
  font-family: 'Abel',sans-serif;
`;
const LoginButton = styled.span`
  cursor: pointer;
  font-family: 'Abel',sans-serif;
`;
// const LogoutButton = styled.span`
//   cursor: pointer;
//   border-radius: 5px;
//   height: 20px;
//   width: 200px;
//   padding: 5px;

// `;


export function Navbar({ login, loggedIn, logout }) {
  return (
    <nav className='navbar navbar-light sticky-top'>
      <Logo><a id="logo"href="#root">Noi's Kitchen</a></Logo>
      <UserStatus>
        {loggedIn !== "loading" ? (
          <>
            {loggedIn ? `Hey, ${loggedIn.displayName}` : ""}
            {loggedIn ? (
               <LoginButton onClick={logout}> | Log out</LoginButton>
            ) : (
              <LoginButton onClick={login}><i class="fab fa-google"></i>Login with Google!</LoginButton>
            )}
          </>
        ) : (
          "Loading..."
        )}
      </UserStatus>
    </nav>
  );
}
