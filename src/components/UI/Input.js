import React, { forwardRef } from "react";
import styles from "./Input.module.scss";

const Input = forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* This will take all the key: value pairs and transform them into property= value */}
      <input {...props.input} ref={ref} />
    </div>
  );
});
export default Input;
