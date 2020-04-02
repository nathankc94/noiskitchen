import React from "react";
import styled from "styled-components";
import { menuGray } from "../Style/Colors";
import { Title } from "../Style/Title";
const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 30px;
  border: none;
  border: 1px solid gray;
  text-align: center;
  `;
  // outline: none;

const IncrementContainer = styled(Title)`
  display: flex;
  height: 30px;
`;
const IncrementButton = styled.div`
  width: 23px;
  color: ${menuGray};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 5px;
  border: 1px solid ${menuGray};
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5; 
     pointer-events: none; 
     `}
  &:hover {
    background-color: #ffe3e3;
  }
`;

export function QuantityInput({ quantity }) {
  return (
    <IncrementContainer>
      <div>Quantity:</div>
      <IncrementButton
        onClick={() => {
          quantity.setValue(quantity.value - 1);
        }}
        disabled={quantity.value === 1}
      >
        -
      </IncrementButton>
      <QuantityInputStyled {...quantity} />
      <IncrementButton
        onClick={() => {
          quantity.setValue(quantity.value + 1);
        }}
      >
        +
      </IncrementButton>
    </IncrementContainer>
  );
}
