import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const cartContextDefaults = {
    items: [],
    amount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContextDefaults}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
