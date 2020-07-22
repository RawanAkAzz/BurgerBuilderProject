import React from "react";
import { object } from "prop-types";

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
  .map((igkey) => {
    return (
    <li key={igkey}><span style={{textTransform:'capitalize' , fontFamily:'bold'}}>{igkey}</span> : {props.ingredients[igkey]}</li>
    );
  });
  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Contnue to Checkout?</p>
    </div>
  );
};

export default OrderSummary;
