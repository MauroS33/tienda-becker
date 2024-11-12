import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZqYjJ_Y_MdkyJ82WLuaxL9zJeXgWOh0k",
  authDomain: "tienda-churrera.firebaseapp.com",
  projectId: "tienda-churrera",
  storageBucket: "tienda-churrera.firebasestorage.app",
  messagingSenderId: "815566608806",
  appId: "1:815566608806:web:778d0f89c22027d0d79767"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db