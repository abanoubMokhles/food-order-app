import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../UI/CartIcon";
import CartContext from "../../context/cart-context";
import styles from "./CartButton.module.scss";

const CartButton = (props) => {
  const cartContx = useContext(CartContext);
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const { items } = cartContx;
  const totalItems = items.reduce((acc, curItem) => {
    return acc + curItem.amount;
  }, 0);
  const clickHandler = () => {
    props.onshowCart();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonIsHighlighted(true);
    }, 300);

    return () => {
      setButtonIsHighlighted(false);
      clearTimeout(timer);
    };
  }, [items]);

  const cartBtnClasses = `${styles.button} ${
    buttonIsHighlighted ? styles.bump : ""
  }`;

  return (
    <button type="button" className={cartBtnClasses} onClick={clickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{totalItems}</span>
    </button>
  );
};
export default CartButton;
