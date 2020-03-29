import React from 'react';
import styled from 'styled-components';
import { menuGray } from "../Style/colors";
import { Title } from "../Style/title";


const NavbarStyled = styled.div`
background-color: ${menuGray};
padding:  10px;
position: fixed;
width: 100%;
`
const Logo = styled(Title)`
font-size: 20px;
color: white;
text-shadow: 1px 1px 4px black;
`

export function Navbar() {
    return <NavbarStyled>
        <Logo>
            Noi's Kitchen 👩🏻‍🍳
        </Logo>
    </NavbarStyled>;
}