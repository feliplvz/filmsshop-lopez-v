import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item({ id, picture, title, genere, stars, price }) {
  return (
    <div className="itemCard">
      <div className="itemCard__btn">
        <button title="Ver Detalle">
          <img src={picture} alt={`imagen de ${title}`} />
          <div className="detalle">
            <Link to={`/item/${id}`} className="btnDetalle">
              Ver Detalle
            </Link>
          </div>
        </button>
      </div>

      <div className="itemCard__title">
        <h3>{`${title}`.toUpperCase()}</h3>
      </div>
      <div className="itemCard__description">
        <p>Genero: {genere}</p>
        <p>
          <i className="far fa-star"></i>
          {stars}/10
        </p>
      </div>
      <div className="itemCard__precio">
        <h3>{`Precio: US$ ${price.toFixed(2)}`}</h3>
      </div>
    </div>
  );
}

export default Item;
