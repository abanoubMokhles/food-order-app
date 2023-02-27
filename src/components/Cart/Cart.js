import React from "react";
import styles from "./Cart.module.scss";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "123", name: "Sushi", price: 2225 }].map((item) => (
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
        <span>99.55</span>
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
