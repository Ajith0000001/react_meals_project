import { useContext } from "react";
import Modal from "./Modal";
import { CartContext } from "../store/Context";
import { formatter } from "../util/Formatter";
import Button from "./Button";
import { CartItemContext } from "../store/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const ContextValue = useContext(CartContext);
  const cartCtx = useContext(CartItemContext);

  const reducedValue = ContextValue.item.reduce((totalPrice, items) => {
    return totalPrice + items.quantity * items.price;
  }, 0);

  function handleCartClose() {
    cartCtx.isClose();
  }

  const checkOut = ContextValue.item.length > 0;

  function handleCheckOut() {
    cartCtx.showCheckOut();
  }
  return (
    <>
      <Modal>
        <h2>Your Cart</h2>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          {ContextValue.item.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                item={item}
              />
            );
          })}
        </ul>
        <p className="cart-total">{formatter.format(reducedValue)}</p>

        <form method="dialog">
          <p className="modal-actions">
            <Button textOnly onClick={handleCartClose}>
              Close
            </Button>
            {checkOut && <Button onClick={handleCheckOut}>CheckOut</Button>}
          </p>
        </form>
      </Modal>
    </>
  );
}
