import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  // loop over each item, calc the amount, then move on to the next one
  const totalCartItems = cartContext.items.reduce((acc, currentItem) => {
    return acc + currentItem.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
