import { useContext } from "react";
import { CartContext } from "../store/Context";

export default function CartItem({ id, item, name, quantity }) {
  const ContextValue = useContext(CartContext);

  function handleDecrease(id) {
    ContextValue.removeItem(id);
  }
  function handleIncrease(item) {
    ContextValue.addItem(item);
  }
  return (
    <div className="cart-item">
      <p>
        {name}-{quantity}
      </p>
      <p className="cart-item-actions">
        <button onClick={() => handleDecrease(id)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleIncrease(item)}>+</button>
      </p>
    </div>
  );
}
