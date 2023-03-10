import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealForm.module.scss";
const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(false);
  const inputItemRef = useRef(null);

  // Validate Amount and lift it to MealItem component
  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const mealsAmount = inputItemRef.current.value;
    const mealsAmountNumber = +mealsAmount;

    if (
      mealsAmountNumber <= 0 ||
      mealsAmountNumber > 5 ||
      mealsAmount.trim().length === 0
    ) {
      setAmountIsValid(true);
      return;
    }
    props.onAddItemToCart(mealsAmountNumber);
    setAmountIsValid(false);
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <Input
        ref={inputItemRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 0,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
        label="Amount"
      />
      <button type="submit">+ add</button>
      {amountIsValid && <p>Valid amount is between (1 and 5)</p>}
    </form>
  );
};
export default MealForm;
