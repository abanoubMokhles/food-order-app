import React, { useState } from "react";
import styles from "./MealsList.module.scss";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const MealsList = () => {
  const [mealsState, setMealsState] = useState([]);
  const meals = mealsState.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <Card className={styles.meals}>
      <ul>{meals}</ul>
    </Card>
  );
};
export default MealsList;
