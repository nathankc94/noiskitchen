import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { formatPrice } from "../Data/FoodData";
import { QuantityInput } from "./QuantityInput";
import { useQuantity } from "../Hooks/useQuantity";
// import { Toppings } from "./Toppings";
import { useToppings } from "../Hooks/useToppings";
import { useChoice } from "../Hooks/useChoice";
import { Choices } from "../FoodDialog/Choices";
import { Spices } from "../FoodDialog/HowSpicy";
import { useSpice } from "../Hooks/useSpice";

export const Dialog = styled.div`
  width: 500px;
  left: calc(50% - 200px);
  position: fixed;
  display: flex;
  background-color: white;
  top: 75px;
  z-index: 11;
  max-height: calc(100% - 100px);
  flex-direction: column;
  @media only screen and (max-width: 1042px) {
    /* For mobile phones: */
    left: calc(50% - 250px);
      width: 500px;
  }
  @media only screen and (max-width: 414px) {
    /* For mobile phones: */
    left: calc(50% - 207px);
      width: 100%;
  }
  @media only screen and (max-width: 375px) {
    /* For mobile phones: */
    left: calc(50% - 188px);
      width: 100%;
  }
  @media only screen and (max-width: 320px) {
    /* For mobile phones: */
    left: calc(50% - 161px);
      width: 100%;
  }
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  font-size: 20px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px gray;
  height: 60px;
  justify-content: center;
  display: flex;
`;

export const ConfirmButton = styled.div`
  margin: 10px;
  color: white;

  width: 200px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  background-color: #13aa6d;
  ${({ disabled }) =>
    disabled &&
    `
    opactity: .5; 
    background-color: grey; 
    pointer-events: none; 
  `}
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 11;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 150px;
  font-size: 25px;
  padding: 5px 40px;
`;
const DialogBannerExit = styled.span`
  top: 5px;
  right: 5px;
  font-size: 18px;
  padding: 1px 8px;
  border-radius: 50%;
 font-family: inherit;
 position: absolute;
background-color: rgba( 255,  255,  255, .8);
`;

// function hasToppings(food){
//   return food.section === "STIR-FRY";
// }
// {hasToppings(openFood) && (
//   <>
//   <h3>Toppings?</h3>
//   <Toppings {...toppings} />
//   </>
//   )}

const pricePerTopping = 1;

export function getPrice(order) {
  return (
    order.quantity *
    (order.price +
      order.toppings.filter((t) => t.checked).length * pricePerTopping)
  );
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const choiceRadio = useChoice(openFood.choice);
  const spiceRadio = useSpice(openFood.spice);
  function close() {
    setOpenFood();
  }

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choice: choiceRadio.value,
    spice: spiceRadio.value,
  };
  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }
  function hasDescription(openFood) {
    if (!openFood.description) return null;
    return openFood;
  }
  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog className="card">
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
          <DialogBannerExit onClick={close}><span>&times;</span></DialogBannerExit>
        </DialogBanner>
        <DialogContent>
          {hasDescription(openFood) && (
            <>
              <p> {openFood.description} </p>
            </>
          )}

          {openFood.choices && (
            <Choices openFood={openFood} choiceRadio={choiceRadio} />
          )}
          {openFood.spices && (
            <Spices openFood={openFood} spiceRadio={spiceRadio} />
          )}

          <QuantityInput quantity={quantity} />
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={addToOrder}
            disabled={openFood.choices && !choiceRadio.value}
          >
            Add to order: {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function FoodDialog(props) {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}
