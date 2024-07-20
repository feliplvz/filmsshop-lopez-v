import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MiProvider } from "./context/CartContext";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
  // Zona de Logica
  return (
    <div className="App">
      <BrowserRouter>
        <MiProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idType" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h2 className="errorMenssage">:( LA PAGINA NO EXISTE</h2>} />
          </Routes>
          <ToastContainer theme="dark" />
        </MiProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
