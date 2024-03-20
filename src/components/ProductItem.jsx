import { useContext } from "react";
import { formatter } from "../util/Formatter";
import Button from "./Button";
import { CartContext } from "../store/Context";
import image1 from "./images/beef-tacos.jpg";

export default function ProductItem({ item }) {
  const ContextValue = useContext(CartContext);
  function handleAdd() {
    ContextValue.addItem(item);
  }
  return (
    <li>
      <div className="meal-item">
        <img src={`src/components/${item.image}`} alt={item.name} />

        <h3 className="product-name">{item.name}</h3>
        <h5 className="meal-item-price">{formatter.format(item.price)}</h5>

        <p className="meal-item-description">{item.description}</p>
        <p className="meal-item-actions">
          <Button onClick={handleAdd}>Add to cart</Button>
        </p>
      </div>
    </li>
  );
}
