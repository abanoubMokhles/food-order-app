import React from "react";
import MealForm from "./MealForm";
import styles from "./MealItem.module.scss";

const MealItem = ({ meal }) => {
  const price = `$${meal.price}`;
  return (
    <div className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <MealForm id={meal.id} />
    </div>
  );
};
export default MealItem;
