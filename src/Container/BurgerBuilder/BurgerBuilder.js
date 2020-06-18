import React , { Component }  from "react";
import Aux from '../../hoc/Auxi'
import Burger from '../../Components/Burger/Burger'
class BurgerBuilder extends Component {
  state={
     ingredeints: {
         salad:0,
         bacon:0,
         cheese:0,
         meat:0,
     }
   }
   
   render(){
      return(
        <Aux>
         <Burger ingredeints={this.state.ingredeints}/>
          {/* <div>Content</div> */}
        </Aux>
      )
   }
     
   }

export default BurgerBuilder