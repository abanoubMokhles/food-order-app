import React, { useContext } from "react";
import MealForm from "./MealForm";
import CartContext from "../../../context/cart-context";
import styles from "./MealItem.module.scss";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price}`;

  const addItemToCartHandler = (commingAmount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: commingAmount,
      description: props.description,
      price: props.price,
    });
  };
  return (
    <div className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <MealForm id={props.id} onAddItemToCart={addItemToCartHandler} />
    </div>
  );
};
export default MealItem;
