import React from 'react';
import styled from 'styled-components';


const CartStyled = styled.div`

bottom: 1rem;
align-self: flex-end;
margin: 5px;
`;


export function Cart() {
    return <CartStyled className="text-right fixed-bottom">
    <button type="button" className="btn" data-toggle="modal" data-target="#exampleModalScrollable">
    <i className="fas fa-cart-plus fa-4x "></i>
</button>   
    </CartStyled>;
}