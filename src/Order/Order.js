import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton
} from "../FoodDialog/FoodDialog";

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  height: 100%;
  padding: 20px;
 
`;

const OrderContainer = styled.div`
  padding: 10x 0x;
  border-bottom: 1px solid gray;
`;

const OrderItem = styled.div`
padding: 10px 0px;
`;

export function Order({ orders }) {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your order's looking pretty empty.</OrderContent>
      ) : (
        <OrderContent>{""}
          <OrderContainer>Your order:</OrderContainer>{""}
          {orders.map(order =>(
              <OrderContainer>
                <OrderItem>
                    {order.name}
                </OrderItem>
              </OrderContainer>
          ))}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
