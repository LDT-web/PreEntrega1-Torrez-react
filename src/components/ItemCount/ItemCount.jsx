import { useState } from "react";
import style from "./ItemCount.module.css";

// const ItemCount = ({ stock, initial, onAdd }) => {
//   const [quantity, setQuantity] = useState(initial);

export default function ItemCount() {
  const [count, setCount] = useState(0);
  //   const increment = () => {
  //     if (quantity < stock) {
  //       setQuantity(quantity + 1);
  //     }
  //   };
  //   const decrement = () => {
  //     if (quantity > 1) {
  //       setQuantity(quantity - 1);
  //     }
  //   };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Button" onClick={decrement}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="Button"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
// export default ItemCount;
