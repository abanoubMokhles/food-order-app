import React from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.scss";

const ITEMS = [
  {
    id: "it1",
    name: "Sushi",
    amount: 3,
    price: 55.25,
  },
];

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {ITEMS.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$30.52</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
