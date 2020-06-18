import React from "react";
import classes from "./Burger.css";
import BurgerIngredeint from "./BurgerIngredeint/BurgerIngredeint";
const burger = (props) => {
  let transformedIngredeints = Object.keys(props.ingredeints).map((igKey) => {
    return [...Array(props.ingredeints[igKey])].map((_, i) => {
      return <BurgerIngredeint key={igKey + i} type={igKey} />;
    });  
  })
  .reduce((arr,el)=>{
     return arr.concat(el)
  },[])
  if(transformedIngredeints.length===0){
     transformedIngredeints=<p>Please Start Adding ingredeints</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredeint type="bread-top" />
          {transformedIngredeints}
      <BurgerIngredeint type="bread-bottom" />
    </div>
  );
};
export default burger;
