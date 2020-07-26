import React from "react";
import { object } from "prop-types";
import Aux from '../../../hoc/Auxi'
import Button from '../../UI/Button/Button'
const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
  .map((igkey) => {
    return (
    <li key={igkey}><span style={{textTransform:'capitalize' , fontFamily:'bold'}}>{igkey}</span> : {props.ingredients[igkey]}</li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" click={props.  purchaseCancle}>CANCLE</Button>
      <Button btnType="Success" click={props.purchaseContinue}>CONTINUE</Button>
    </Aux>
  );
};

export default OrderSummary;
