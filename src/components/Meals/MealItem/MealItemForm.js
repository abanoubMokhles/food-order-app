import React, { useState, useRef } from "react";
import Input from "../../UI/Input.js";
import styles from "./MealItemForm.module.scss";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef(null);

  const addMealHandler = (event) => {
    event.preventDefault();

    console.log(amountInputRef.current);
    const amountInputValue = amountInputRef.current.value;
    const amountInputValueNumber = +amountInputValue;

    if (
      amountInputValue.trim().length === 0 ||
      amountInputValueNumber < 1 ||
      amountInputValueNumber > 3
    ) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
    }

    props.onAddToCart(amountInputValueNumber);
  };

  return (
    <form className={styles.form} onSubmit={addMealHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid number (1 to 5)</p>}
    </form>
  );
};
export default MealItemForm;
