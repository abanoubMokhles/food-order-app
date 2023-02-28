import React, { useContext } from "react";
import CartIcon from "../UI/CartIcon";
import CartContext from "../../context/cart-context";
import styles from "./CartButton.module.scss";

const CartButton = (props) => {
  const cartContx = useContext(CartContext);
  const totalItems = cartContx.items.reduce((acc, curItem) => {
    return acc + curItem.amount;
  }, 0);
  const clickHandler = () => {
    props.onshowCart();
  };
  return (
    <button type="button" className={styles.button} onClick={clickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{totalItems}</span>
    </button>
  );
};
export default CartButton;
