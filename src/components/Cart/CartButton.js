import React from "react";
import CartIcon from "../UI/CartIcon";
import styles from "./CartButton.module.scss";

const CartButton = (props) => {
  const clickHandler = () => {
    props.onshowCart();
  };
  return (
    <button type="button" className={styles.button} onClick={clickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};
export default CartButton;
