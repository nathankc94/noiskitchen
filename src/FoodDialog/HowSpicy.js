import React from "react";
import styled from "styled-components";



const RadioInput = styled.input`
cursor: pointer;
margin: 3px
`;

const Label = styled.label`
cursor: pointer;
margin: 3px
`;

export function Spices({ openFood, spiceRadio }) {
  return (
    <>
      <h3>Spice Levels:</h3>
      {openFood.spices.map(spice => (
        <>
          <RadioInput
            type="radio"
            id={spice}
            name="spice"
            value={spice}
            checked={spiceRadio.value === spice}
            onChange={spiceRadio.onChange}
          />
          <Label for={spice}> {spice} </Label>{" "}
        </>
      ))}
    </>
  );
}
