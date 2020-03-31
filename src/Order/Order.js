import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton
} from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";
import { getPrice } from "../FoodDialog/FoodDialog";
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

const DetailItem = styled.div`
color: gray;
font-size: 15px;
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
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export function Order({ orders, setOrders}) {
  const total = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your order's empty.</OrderContent>
      ) : (
        <OrderContent>
          {" "}
          <OrderContainer> Your Order: </OrderContainer>{" "}
          {orders.map((order, index) => (
            <OrderContainer editable>
              <OrderItem
              
              >
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={e => {
                    e.stopPropagation();
                    deleteItem(index);
                  }}
                >
                  🗑
                </div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings.filter(t =>t.checked).map(topping => topping.name).join(", ")}
              </DetailItem>
              {order.choice && <DetailItem>{order.choice}</DetailItem>}
              {order.spice && <DetailItem>{order.spice}</DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Total</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
