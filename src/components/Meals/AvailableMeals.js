import React from "react";
import classes from "./AvailableMeals.module.scss";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const meals = (
    <ul>
      {DUMMY_MEALS.map((meal) => (
        <MealItem
          name={meal.name}
          description={meal.description}
          price={meal.price}
          key={meal.id}
          id={meal.id}
        />
      ))}
    </ul>
  );
  return (
    <section className={classes.meals}>
      <Card>{meals}</Card>
    </section>
  );
};
export default AvailableMeals;
