import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(0);

  const sumarItem = () => {
    count < stock ? setCount(count + 1) : alert("No quedan más productos en stock");
  };

  const restarItem = () => {
    count <= stock && count > 1 ? setCount(count - 1) : alert("Agrega al menos 1 producto!");
  };

  const isDisabled = () => {
    let enabled = count === 0 ? true : false;
    return enabled;
  };

  return (
    <div className="counter">
      <p>Stock: {stock}</p>
      <div className="counter__controls">
        <button className="counter__controlsbtn" onClick={restarItem}>
          -
        </button>
        <label>{count}</label>
        <button className="counter__controlsbtn" onClick={sumarItem}>
          +
        </button>
      </div>
      <button
        disabled={isDisabled()}
        className={`counter__controlsbtn counter__controlsbtn--agregar ${
          isDisabled() ? "counter__controlsbtn--disabled" : null
        }`}
        onClick={() => {
          onAdd(count);
        }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ItemCount;
