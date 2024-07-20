import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../utils/firebaseConfig";

import { serverTimestamp } from "firebase/firestore";
import { doc, collection, setDoc, updateDoc, increment } from "firebase/firestore";

import "./Cart.css";

function Cart() {
  const { itemsAdded, removeItem, cartCleaner, purchaseValue, mensaje } = useContext(CartContext);

  // ? Función para crear orden de compra.
  const createOrder = async () => {
    // Se crea un objeto con la estructura de la orden de compra.
    let order = {
      buyer: { name: "Vegeta", email: "vegeta@saiayin.com", phone: "011-345-679850" },
      date: serverTimestamp(),
      items: itemsAdded.map((item) => ({ id: item.id, title: item.title, quantity: item.count, price: item.price })),
      total: purchaseValue(),
    };

    // Lo enviamos como un nuevo documento en una nueva colección.
    const orderRef = doc(collection(db, "orders"));
    await setDoc(orderRef, order);
    mensaje(`Tu orden a sido generada correctamente: ID ${orderRef.id}`);

    // actualizamos el stock de los productos originales.
    itemsAdded.forEach(async (item) => {
      const itemRef = doc(db, "films", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.count),
      });
    });
    setTimeout(() => {
      cartCleaner();
    }, 3000);
  };

  return (
    <div className="cartContainer">
      <h2>Compra actual</h2>
      <hr />
      <table className="cartTable">
        <tbody>
          <tr>
            <th className="cartTable__th--caratula">Caratula</th>
            <th>Título</th>
            <th>Cantidad</th>
            <th>SubTotal</th>
            <th></th>
          </tr>
          {itemsAdded.length > 0 ? (
            itemsAdded.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.thumbnail} alt={`caratula de ${item.title}`} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.count}</td>
                  <td>{`US$ ${(item.price * item.count).toFixed(2)}`}</td>
                  <td>
                    <button
                      className="cartTable__remove"
                      onClick={() => {
                        removeItem(item.id);
                      }}
                    >
                      <i className="fas fa-minus-circle"></i>
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5}>
                <p className="carritoVacio__message">¡Carrito Vacío!</p>
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}></td>
            <td colSpan={2}>{`Valor Total: US$ ${purchaseValue().toFixed(2)}`}</td>
          </tr>
        </tfoot>
      </table>
      <div className="cartControls">
        {itemsAdded.length > 1 ? (
          <button className="detailActions__btn" onClick={cartCleaner}>
            Limpiar Carrito
          </button>
        ) : null}
        <Link to="/" className="detailActions__btn">
          Continuar Compra
        </Link>
        {itemsAdded.length > 0 ? (
          <button className="detailActions__btn" onClick={createOrder}>
            Confirmar Compra
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Cart;
