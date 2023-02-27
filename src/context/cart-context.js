import React from "react";

const CartContext = React.createContext({
  items: [],
  totalCose: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
export default CartContext;
