import React from "react";
import styled from "styled-components";
import { Title } from "../Style/Title";
const QuantityInputStyled = styled.input`
  font-size: 15px;
  width: 38px;
  border: 1px solid black;
  text-align: center;
  border-radius: 25%;
  font-family: serif;
  `;


const IncrementContainer = styled(Title)`
  display: flex;
  height: 27px;
  margin-top: 10px;
`;
const IncrementButton = styled.div`
  width: 23px;
  color: white;
  font-size: 28px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 5px;
  border-radius: 50%;
  background-color: #0c70f3;
  border: 1px solid gray;
  box-shadow: 1px 2px 5px black;
  font-family: serif;
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5; 
     pointer-events: none; 
     `}
  &:hover {
    background-color: #0c70f3;
  }
`;

export function QuantityInput({ quantity }) {
  return (
    <IncrementContainer>
      <h3>Quantity:</h3>
      <IncrementButton
        onClick={() => {
          quantity.setValue(quantity.value - 1);
        }}
        disabled={quantity.value === 1}
      >
        <span>&#8211;</span>
      </IncrementButton>
      <QuantityInputStyled {...quantity} />
      <IncrementButton
        onClick={() => {
          quantity.setValue(quantity.value + 1);
        }}
      >
        <span>&#43;</span>
      </IncrementButton>
    </IncrementContainer>
  );
}
