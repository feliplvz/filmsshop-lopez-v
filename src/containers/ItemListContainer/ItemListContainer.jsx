import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Importaciones para Promesa Firestore
import { getFilms } from "../../utils/promise";

import { CircleSpinnerOverlay } from "react-spinner-overlay";
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";

function ItemListContainer() {
  // SetState Hook
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // useParams Hook
  const { idType } = useParams();

  // componentDidUpdate del useEffect Hook. donde un componente necesita hacer algo al actualizarse la dependencia.
  useEffect(() => {
    switch (idType) {
      case "movies":
        (async () => {
          try {
            const respuesta = await getFilms();
            setMovies(respuesta.filter((item) => item.type === idType));
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        })();
        break;

      case "series":
        (async () => {
          try {
            const respuesta = await getFilms();
            setMovies(respuesta.filter((item) => item.type === idType));
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        })();
        break;

      case "anime":
        (async () => {
          try {
            const respuesta = await getFilms();
            setMovies(respuesta.filter((item) => item.type === idType));
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        })();
        break;

      case "estrenos":
        (async () => {
          try {
            const respuesta = await getFilms();
            setMovies(respuesta.filter((item) => item.premiereDate > 2017));
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        })();
        break;

      default:
        (async () => {
          try {
            const respuesta = await getFilms();
            setMovies(respuesta);
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        })();
    }
  }, [idType]);

  // El valor del estado es manejado dentro de useEffect y a su vez determinado por el valor de useParams

  return (
    <div className="main">
      {/* Envio el state por props */}
      {loading ? (
        <CircleSpinnerOverlay
          loading={loading}
          size={42}
          color="rgb(255 158 181)"
          overlayColor="rgb(255 158 181 / 0%)"
          message={<p className="loadingText">ESPERANDO DATOS...</p>}
        />
      ) : (
        <ItemList items={movies} />
      )}
    </div>
  );
}

export default ItemListContainer;
