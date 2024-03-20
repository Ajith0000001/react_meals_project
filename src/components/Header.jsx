import { useContext } from "react";
import { CartContext } from "../store/Context";
import logo from "../assets/logo.jpg";
import Button from "./Button";
import { CartItemContext } from "../store/CartContext";

export default function Header() {
  const ContextValue = useContext(CartContext);
  const cartCtx = useContext(CartItemContext);

  const reducedValue = ContextValue.item.reduce((totalValue, items) => {
    return totalValue + items.quantity;
  }, 0);

  function handleCartClick() {
    cartCtx.isOpen();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>MealsApp</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleCartClick}>
          cart({reducedValue})
        </Button>
      </nav>
    </header>
  );
}
