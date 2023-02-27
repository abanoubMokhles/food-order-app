import React, { useContext } from "react";
import MealForm from "./MealForm";
import CartContext from "../../../context/cart-context";
import styles from "./MealItem.module.scss";

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);
  const price = `$${meal.price}`;

  const addItemHandler = (amount) => {
    console.log({
      id: meal.id,
      name: meal.name,
      amount: amount,
      description: meal.description,
      price: meal.price,
    });
    // cartCtx.addItem({
    //   id: meal.id,
    //   name: meal.name,
    //   amount: amount,
    //   description: meal.description,
    //   price: meal.price,
    // });
  };
  return (
    <div className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <MealForm id={meal.id} onAddItem={addItemHandler} />
    </div>
  );
};
export default MealItem;
