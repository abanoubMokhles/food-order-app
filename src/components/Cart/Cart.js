import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import styles from "./Cart.module.scss";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartContx = useContext(CartContext);

  // cartContx.totalAmount = cartContx.items.reduce((acc, currentItem) => {
  //   return currentItem.price + acc;
  // }, 0);

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContx.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  const closeCartHandler = () => {
    props.onCloseCart();
  };

  const orderMealsHandler = () => {
    console.log("Ordering...");
  };
  return (
    <Modal onCloseCart={closeCartHandler}>
      {cartItems}
      <div className={styles.total}>
        <span>Total</span>
        <span>10</span>
        {/* <span>{cartContx.totalAmount}</span> */}
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles["button-alt"]}
          onClick={closeCartHandler}
        >
          Close
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={orderMealsHandler}
        >
          Order
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
