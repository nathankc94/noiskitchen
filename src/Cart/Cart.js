import React from "react";
// import styled from "styled-components";
import "./style.css";

export function Cart() {
  return (
    <h1 className="text-right bbb"><button
        type="button"
        className="btn btn-light p-3 rounded-circle  m-3  "
        data-toggle="modal"
        data-target="#exampleModalScrollable"
      >
        <i className="fas fa-cart-plus fa-3x "></i>
      </button> </h1>
     
  );
}
