import { useRef, useContext, useEffect } from "react";
import { CartItemContext } from "../store/CartContext";

export default function Modal({ children }) {
  const cartCtx = useContext(CartItemContext);
  const dialogRef = useRef();

  useEffect(() => {
    if (cartCtx.CartItem === "cart") {
      dialogRef.current.showModal();
    } else if (cartCtx.CartItem === "") {
      dialogRef.current.close();
    } else if (cartCtx.CartItem === "checkout") {
      dialogRef.current.showModal();
    }
  }, [cartCtx.CartItem]);

  // function handleClose() {
  //   cartCtx.isClose();
  // }
  return (
    <dialog className="modal" ref={dialogRef}>
      {children}
    </dialog>
  );
}
