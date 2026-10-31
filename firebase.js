// Avesham Development Store — Firebase Authentication + Firestore (no Storage billing dependency)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDpZHDGdkK6Z5D-UsqH9Ud1fd6jhdXBjMg",
  authDomain: "avesham-development-store.firebaseapp.com",
  projectId: "avesham-development-store",
  storageBucket: "avesham-development-store.firebasestorage.app",
  messagingSenderId: "865714951810",
  appId: "1:865714951810:web:6d25850d450cd722dbc69b",
  measurementId: "G-M9BSB5CV26"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
