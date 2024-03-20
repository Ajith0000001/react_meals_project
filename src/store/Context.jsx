import { createContext, useReducer, useRef, useState } from "react";

export const CartContext = createContext();

function reducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updateItems = [...state.items];

    if (existingItem > -1) {
      const updateItem = {
        ...updateItems[existingItem],
        quantity: updateItems[existingItem].quantity + 1,
      };
      updateItems[existingItem] = updateItem;
    } else {
      updateItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updateItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItem = state.items.findIndex((item) => item.id === action.id);

    const updateItems = state.items[existingItem];

    const updatedItemValue = [...state.items];
    if (updateItems.quantity === 1) {
      updatedItemValue.splice(existingItem, 1);
    } else {
      const updatedItem = {
        ...updateItems,
        quantity: updateItems.quantity - 1,
      };
      updatedItemValue[existingItem] = updatedItem;
    }
    return { ...state, items: updatedItemValue };
  }
}

export default function ContextProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, { items: [] });

  function addItem(value) {
    dispatch({ type: "ADD_ITEM", item: value });
  }
  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", id });
  }

  const ContextValue = {
    item: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
}
