import React from "react";
import styles from "./Input.module.scss";
const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* This will take all the key: value pairs and transform them into property= value */}
      <input {...props.input} />
    </div>
  );
};
export default Input;
