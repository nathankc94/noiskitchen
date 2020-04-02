import React from "react";
import styled from "styled-components";
import "./style.css"
import { Title } from "../Style/Title";

// const NavbarStyled = styled.div`
//   z-index: 999;
// `;
const Logo = styled(Title)`
  font-size: 22px;
  color: white;
  text-shadow: 1px 1px 4px black;
`;
const UserStatus = styled(Title)`
  color: white;
  font-size: 17px;
  margin-right: 5px;
  text-shadow: 1px 1px 4px black;
`;
const LoginButton = styled.span`
  cursor: pointer;
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
      <Logo>Noi's Kitchen</Logo>
      <UserStatus>
        {loggedIn !== "loading" ? (
          <>
            {loggedIn ? `Hi ${loggedIn.displayName}` : ""}
            {loggedIn ? (
               <LoginButton onClick={logout}> | Log out</LoginButton>
            ) : (
              <LoginButton onClick={login}>Login with Google!</LoginButton>
            )}
          </>
        ) : (
          "Loading..."
        )}
      </UserStatus>
    </nav>
  );
}
