// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4FiZGygGt-iQesiYMfn8TMD18FM4XtKM",
  authDomain: "elvideoclu-shop.firebaseapp.com",
  projectId: "elvideoclu-shop",
  storageBucket: "elvideoclu-shop.appspot.com",
  messagingSenderId: "603170674165",
  appId: "1:603170674165:web:2e4b43372187aa34667cbc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
