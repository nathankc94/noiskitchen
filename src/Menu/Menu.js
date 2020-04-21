import React from "react";
import styled from "styled-components";
import { foods } from "../Data/FoodData";
// import { Food, FoodGrid, FoodLabel } from "./FoodGrid";
import { formatPrice } from "../Data/FoodData";
import "./style.css"

const MenuStyled = styled.div`
color: black;
`;

export function Menu({ setOpenFood }) {
  return (
    <MenuStyled >
      {Object.entries(foods).map(([sectionName, foods]) => (
        <div className="container foodContainer">
           
            
          <h1 className="pt-5 pl-3 font-weight-bolder border-bottom border-dark">{sectionName}</h1>

          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
            {foods.map(food => (
              <div
                
                onClick={() => {
                  setOpenFood(food);
                }}
                className="card rounded col border-0"
              >
                <img src={food.img} className="card-img img-fluid rounded" alt="img"></img>
                <div className="card-img-overlay"><p className="priceImg">{formatPrice(food.price)}</p></div>
                <div className="card-body">
                  <h5 className="text-center font-weight-bolder border-bottom">{food.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </MenuStyled>
  );
}
