import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/cart-context";
import styles from "./MealItem.module.scss";

const MealItem = (props) => {
  const cartContx = useContext(CartContext);

  const addMealHandler = (amount) => {
    cartContx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
    });
  };

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addMealHandler} />
      </div>
    </li>
  );
};

export default MealItem;
