import React, { useState, useEffect } from "react";
import styles from "./MealsList.module.scss";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const MealsList = () => {
  const [mealsState, setMealsState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    const getMeals = async () => {
      const request = await fetch(
        `https://react-1664e-default-rtdb.firebaseio.com/meals.json`
      );

      if (!request.ok) {
        throw new Error("Something went wrong.");
      }

      const requestData = await request.json();
      const resultMeals = [];
      for (const key in requestData) {
        resultMeals.push({
          id: key,
          name: requestData[key].name,
          description: requestData[key].description,
          price: requestData[key].price,
        });
      }

      setMealsState(resultMeals);
      setIsLoading(false);
    };

    getMeals().catch((error) => {
      setHttpError(error.message);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.loadingText}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.errorText}>
        <p>{httpError}</p>
      </section>
    );
  }

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
