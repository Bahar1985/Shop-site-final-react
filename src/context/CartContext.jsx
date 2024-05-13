import { createContext, useContext, useReducer } from "react";

const initialState = {};

const reducer = () => {};

export const CartContext = createContext();

function CartProvider({ Children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state,dispatch }}>
      {Children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state,dispatch]
};
export default CartProvider;
export { useCart };
