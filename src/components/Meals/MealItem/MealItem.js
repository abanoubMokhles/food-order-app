import React from "react";
import classes from "./MealItem.module.scss";

const MealItem = (props) => {
  const mealPrice = `$${props.price.toFixed(2)}`;

  return (
    <div className={classes.meal}>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{mealPrice}</div>
    </div>
  );
};
export default MealItem;
