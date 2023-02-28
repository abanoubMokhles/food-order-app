import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import styles from "./Cart.module.scss";

const Cart = (props) => {
  const cartContx = useContext(CartContext);
  const cartHasItems = cartContx.items.length > 0;
  const totalMoneyAmount = cartContx.totalAmount.toFixed(2);

  const removeItemFromCartHandler = (id) => {
    cartContx.removeItem(id);
  };
  const addItemToCartHandler = (item) => {
    cartContx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          id={item.id}
          amount={item.amount}
          onRemove={removeItemFromCartHandler.bind(null, item.id)}
          onAdd={addItemToCartHandler.bind(null, item)}
        />
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
        <span>{totalMoneyAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles["button-alt"]}
          onClick={closeCartHandler}
        >
          Close
        </button>
        {cartHasItems && (
          <button
            type="button"
            className={styles.button}
            onClick={orderMealsHandler}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
