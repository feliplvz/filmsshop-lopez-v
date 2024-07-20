import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

// Recibe el state desde ItemListContainer
function ItemList({ items }) {
  return (
    <div className="cardContainer">
      {/* Si el array esta completo mapea cada item generando un componente Item*/}
      {items.length
        ? items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              picture={item.thumbnail}
              title={item.title}
              genere={item.genere}
              stars={item.stars}
              price={item.price}
            />
          ))
        : null}
    </div>
  );
}

export default ItemList;
