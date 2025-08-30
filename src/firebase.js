import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // <-- Add this

const firebaseConfig = {
  apiKey: "AIzaSyDgCHpaU7jW2Dml-cbePxjWyS1S5t8_qHw",
  authDomain: "guest-book-safana-fakhri.firebaseapp.com",
  databaseURL:
    "https://guest-book-safana-fakhri-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "guest-book-safana-fakhri",
  storageBucket: "guest-book-safana-fakhri.firebasestorage.app",
  messagingSenderId: "533998231055",
  appId: "1:533998231055:web:07dead6eb632e439cf0d7a",
  measurementId: "G-XNLN93SCG3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // <-- Add this

export { app, analytics, database }; // <-- Add this
