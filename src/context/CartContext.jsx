import { React, createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const MiProvider = ({ children }) => {
  //itemsAdded: Estado que guarda un array con los items agregados al carrito.
  const [itemsAdded, setItemsAdded] = useState([]);

  // Estado que maneja el renderizado del boton agregar al carrito en ItemDetail.
  const [toCart, setToCart] = useState(false);

  // ? Función para agregar un item al carrito
  const addItem = (item, count, title) => {
    // armo un objeto nuevo con las propiedades del item y le agrego la propiedad count.
    const armedItem = { ...item, count };

    // Verificar si hay items duplicados.
    // Si el armedItem existe en el array lo borro (newArray), luego a newArray le agrego un armedItem modificado.

    if (isInCart(armedItem.id)) {
      const itemInCart = itemsAdded.filter((i) => i.id === armedItem.id);

      if (itemInCart[0].count + armedItem.count <= item.stock) {
        const newArray = itemsAdded.filter((i) => i.id !== armedItem.id);
        const newItem = { ...item, count: (armedItem.count += count) };
        newArray.push(newItem);
        setItemsAdded(newArray);
        setToCart(true);
        mensaje(`Se actualizó tu Film ${title}`);
      } else {
        alerta("Esta cantidad supera el stock, por favor reducela");
      }
    } else {
      setItemsAdded([...itemsAdded, armedItem]);
      mensaje(`Se agregaron al carrito: ${count} cantidades de ${title} `);
      setToCart(true);
    }
  };

  // ? Función sumar cantidades.
  const itemsCounter = () => {
    let qtys = itemsAdded.map((item) => item.count);
    return qtys.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };

  // ? Función para calcular total de la compra.
  const purchaseValue = () => {
    let totals = itemsAdded.map((item) => item.count * item.price);
    return totals.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };

  // ? Función para remover un item del carrito.
  const removeItem = (id) => {
    // Devuelve todos los elementos menos el que coincida con la condición y setea el nuevo array.
    setItemsAdded(itemsAdded.filter((item) => item.id !== id));
  };

  // ? Función para limpiar el carrito.
  const cartCleaner = () => {
    // Borra todo el array
    setItemsAdded([]);
    mensaje("El carrito se ha vaciado correctamente!.");
  };

  // ? Función para verificar si un item en particular se encuentra en el carrito.
  const isInCart = (id) => {
    // devuelve true si el elemento existe en el array.
    return itemsAdded.some((item) => item.id === id);
  };

  // ? Función mensaje y alerta para React Tostify.
  const mensaje = (mensaje) => {
    toast.success(mensaje, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const alerta = (mensaje) => {
    toast.warn(mensaje, {
      position: "top-center",
      autoClose: 2300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        cartCleaner,
        itemsAdded,
        itemsCounter,
        purchaseValue,
        mensaje,
        alerta,
        toCart,
        setToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
