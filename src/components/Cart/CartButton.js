import React from "react";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.scss";

const CartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes["button__icon"]}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes["button__badge"]}>10</span>
    </button>
  );
};
export default CartButton;
