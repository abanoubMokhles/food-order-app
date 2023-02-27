import React from "react";
import Input from "../../UI/Input";
import styles from "./MealForm.module.scss";
const MealForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
      />
      <button type="submit">+ add</button>
    </form>
  );
};
export default MealForm;
