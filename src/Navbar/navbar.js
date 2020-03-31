import React from "react";
import styled from "styled-components";
import { menuGray } from "../Style/Colors";
import { Title } from "../Style/Title";

const NavbarStyled = styled.div`
  background-color: ${menuGray};
  padding: 12px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px black;
`;
const UserStatus = styled.div`
  color: white;
  font-size: 20px;
  margin-right: 30px;
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
    <NavbarStyled>
      <Logo>Noi's Kitchen</Logo>
      <UserStatus>
        {loggedIn !== "loading" ? (
          <>
            {loggedIn ? `Hello ${loggedIn.displayName}` : ""}
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
    </NavbarStyled>
  );
}
