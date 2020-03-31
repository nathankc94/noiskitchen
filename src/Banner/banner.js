import React from 'react';
import styled from 'styled-components';
import { Title } from "../Style/Title";


export const BannerStyled = styled.div`
height: 200px;
background-image: url(img/Banner.jpeg);
background-position: center;
background-size: cover;
padding: 50px;
margin-bottom: 50px;

`;

const BannerName = styled(Title)`
font-size: 100px;
color: white;
text-shadow: 1px 1px 4px black;
padding: 30px;
text-align: center;
`;

export function Banner() {
    return <BannerStyled>
        <BannerName>Noi's Kitchen</BannerName>
            
    </BannerStyled>;
}