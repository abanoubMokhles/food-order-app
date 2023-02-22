import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.scss";

// const ITEMS = [
//   {
//     id: "it1",
//     name: "Sushi",
//     amount: 3,
//     price: 55.25,
//   },
// ];

const Cart = (props) => {
  const cartContxt = useContext(CartContext);
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContxt.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$30.52</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onClose} className={styles["button--alt"]}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
