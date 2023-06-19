import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const products = useState([])
  return <CartContext.Provider value={products}>{children}</CartContext.Provider>;
};

export default CartProvider;
