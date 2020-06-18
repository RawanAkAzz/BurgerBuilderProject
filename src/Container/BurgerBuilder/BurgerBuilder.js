import React , { Component }  from "react";
import Aux from '../../hoc/Auxi'
import Burger from '../../Components/Burger/Burger'
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE={
  salad:2.1,
  bacon:1.3,
  cheese:3.2,
  meat:3.5,
}
class BurgerBuilder extends Component {
  state={
     ingredients: {
         salad:0,
         bacon:0,
         cheese:0,
         meat:0,
     },
     totalPrice:5
   }
   addIngredientHandler=(type)=>{
    const oldIngredient=this.state.ingredients[type]
    const newIngredient= oldIngredient + 1
    const updateIngredeint= {
      ...this.state.ingredients
    }
    updateIngredeint[type]=newIngredient
    const additionPrice=INGREDIENT_PRICE[type]
    const oldPrice= this.state.totalPrice
    const newPrice=additionPrice + oldPrice
    this.setState({totalPrice:newPrice , ingredients:updateIngredeint})
  }
  
   
   removiengredientHandler=(type)=>{
    const removeIngredient=this.state.ingredients[type]
    const newIngredient= removeIngredient - 1
    const afterRemoveIng= {
      ...this.state.ingredients
    }
    afterRemoveIng[type]=newIngredient
    const  DeductionPrice=INGREDIENT_PRICE[type]
    const oldPrice= this.state.totalPrice
    const newPrice= oldPrice -  DeductionPrice  
    this.setState({totalPrice:newPrice , ingredients:removeIngredient})
   }

  
   render(){
      return(
        <Aux>
         <Burger ingredients={this.state.ingredients}/>
          <BuildControls 
          addIng={this.addIngredientHandler}
          removed={this.removiengredientHandler}
          />
        </Aux>
      )
   }
     
   }

export default BurgerBuilder