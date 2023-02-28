import { useReducer } from "react";
import CartContext from "./cart-context";

const DEFAULT_CART_STATE = {
  items: [],
  totalAmount: 0,
};
const REDUCER_TYPES = {
  addItem: "add",
  removeItem: "remove",
};

const cartReducer = (state, action) => {
  if (action.type === "add") {
    // Update total money amount
    const updatedAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    // Check if item exists or not
    const existingItemIndex = state.items.findIndex(
      (item) => item.name === action.payload.name
    );
    const existingItem = state.items[existingItemIndex];

    // update item's amount If item exists already
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // concat will return a new array with the added items
      updatedItems = state.items.concat(action.payload);
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
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
