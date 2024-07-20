import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// ? Definición de promesa que devuelve el array de productos.
// Valor random que maneja la situación de posible error de respuesta en servidor.
// const is_OK = Math.random() > 0.1 ? true : false;

// const apiPromise = () => {
//   return new Promise((resolve, reject) => {
//     if (is_OK) {
//       setTimeout(() => {
//         resolve(array);
//       }, 2000);
//     } else {
//       setTimeout(() => {
//         reject("ERROR 404: UPS!, ERROR EN EL SERVIDOR, POR FAVOR ACTUALICE LA PAGINA");
//       }, 4000);
//     }
//   });
// };
// export default apiPromise;

// ? Definnición de Promesa desde Firebase.
export const getFilms = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "films"));
    const dataFromFirebase = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return dataFromFirebase;
  } catch (error) {
    console.log(error);
  }
};
