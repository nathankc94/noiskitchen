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

export function Choices({ openFood, choiceRadio }) {
  return (
    <>
      <h3>Choose Protein:</h3>
      {openFood.choices.map(choice => (
        <>
          <RadioInput
            type="radio"
            id={choice}
            name="choice"
            value={choice}
            checked={choiceRadio.value === choice}
            onChange={choiceRadio.onChange}
          />
          <Label for={choice}> {choice} </Label>{" "}
        </>
      ))}
    </>
  );
}
