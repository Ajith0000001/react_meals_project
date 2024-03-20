import { createContext, useState } from "react";

export const CartItemContext = createContext();

export default function CartContextProvider({ children }) {
  const [CartItem, setCartItem] = useState("");

  function isOpen() {
    setCartItem("cart");
  }

  function isClose() {
    setCartItem("");
  }
  function showCheckOut() {
    setCartItem("checkout");
  }

  const cartCtx = {
    isOpen,
    CartItem,
    isClose,
    showCheckOut,
  };
  return (
    <CartItemContext.Provider value={cartCtx}>
      {children}
    </CartItemContext.Provider>
  );
}
