import React, { Component } from "react";
import Aux from "../../hoc/Auxi";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Model from "../../Components/UI/Model/Model";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICE = {
  salad: 2.1,
  bacon: 1.3,
  cheese: 3.2,
  meat: 3.5,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 5,
    purchasable: false,
    purchasing: false,
  };
  updatePurchasable(ingredients) {
    //  const ingredients={
    //    ...this.state.ingredients
    //  }
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }
  addIngredientHandler = (type) => {
    const oldIngredient = this.state.ingredients[type];
    const newIngredient = oldIngredient + 1;
    const updateIngredeint = {
      ...this.state.ingredients,
    };
    updateIngredeint[type] = newIngredient;
    const additionPrice = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = additionPrice + oldPrice;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredeint });
    this.updatePurchasable(updateIngredeint);
  };

  removiengredientHandler = (type) => {
    const removeIngredient = this.state.ingredients[type];
    if (removeIngredient <= 0) {
      return;
    }
    const newIngredient = removeIngredient - 1;
    const afterRemoveIng = {
      ...this.state.ingredients,
    };
    afterRemoveIng[type] = newIngredient;
    const DeductionPrice = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - DeductionPrice;
    this.setState({ totalPrice: newPrice, ingredients: removeIngredient });
    // this.updatePurchasable(updateIngredeint)
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCloseHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    alert(" You Continue ! ");
  };
  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Model
          show={this.state.purchasing}
          modelClose={this.purchaseCloseHandler}
        >
          <OrderSummary
            purchaseCancle={this.purchaseCloseHandler}
            purchaseContinue={this.purchaseContinueHandler}
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
          />
        </Model>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIng={this.addIngredientHandler}
          removed={this.removiengredientHandler}
          disable={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          order={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
