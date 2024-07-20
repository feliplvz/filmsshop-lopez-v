import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

function CartWidget() {
  const { itemsCounter } = useContext(CartContext);

  return (
    <div className="cartButton">
      <Link to="/cart">
        <i className="cartButton__icon fas fa-shopping-cart">
          {itemsCounter() > 0 ? <span className="cartButton__counter">{itemsCounter()}</span> : null}
        </i>
      </Link>
    </div>
  );
}

export default CartWidget;
