import { useReducer } from "react";
import CartContext from "./cart-context";

const DEFAULT_CART_STATE = {
  items: [
    { id: "i1", name: "Sushi", price: 22, amount: 0 },
    { id: "i2", name: "Burger", price: 15, amount: 0 },
  ],
  totalAmount: 0,
};
const REDUCER_TYPES = {
  addItem: "add",
  removeItem: "remove",
};
const cartReducer = (state, action) => {
  if (action.type === "add") {
    // concat will return a new array with the added items
    const updatedItems = state.items.concat(state.payload);
    const updatedAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  // if (action.type === "remove") {
  //   const updatedItems = state.items.concat(state.payload);
  //   const updatedAmount =
  //     state.totalAmount + action.payload.price * action.payload.amount;
  //   return {
  //     items: updatedItems,
  //     totalAmount: updatedAmount,
  //   };
  // }
  return DEFAULT_CART_STATE;
};
const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    DEFAULT_CART_STATE
  );
  const addItemHandler = (item) => {
    dispatchCartAction({ type: REDUCER_TYPES.addItem, payload: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: REDUCER_TYPES.removeItem, id: id });
  };

  const contextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
