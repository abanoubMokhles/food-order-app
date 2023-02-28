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
  /*========================
    When Adding new Items
  ========================*/
  if (action.type === REDUCER_TYPES.addItem) {
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

  /*========================
     When Removing Items
  ========================*/
  if (action.type === REDUCER_TYPES.removeItem) {
    // Search for the item in the existing cart items
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    // Update total money amount
    const updatedAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount > 1) {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== existingItem.id);
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  /*========================
       Default Fallback
  ========================*/
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
