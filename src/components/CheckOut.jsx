import { useContext } from "react";
import Modal from "./Modal";
import { CartItemContext } from "../store/CartContext";
import Input from "./Input";
import Button from "./Button";
import { CartContext } from "../store/Context";

export default function CheckOut() {
  const cartCtx = useContext(CartItemContext);
  const ContextValue = useContext(CartContext);

  function handleCartClose() {
    cartCtx.isClose();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    cartCtx.isClose();

    window.alert("SuccessFull");
    ContextValue.item = [];
  }

  return (
    <>
      {cartCtx.CartItem === "checkout" && (
        <Modal>
          <form onSubmit={handleSubmit} className="control">
            {" "}
            <h2>checkout</h2>
            <Input label="Name" type="text" name="name" />
            <Input label="Email" type="email" name="email" />
            <Input label="City" type="text" name="city" />
            <p className="modal-actions">
              <Button type="button" textOnly onClick={handleCartClose}>
                close
              </Button>
              <Button>Submit</Button>
            </p>
          </form>
        </Modal>
      )}
    </>
  );
}
