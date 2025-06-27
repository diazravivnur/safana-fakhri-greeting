// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, set } from "firebase/database"; // Import Realtime Database functions
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAylCMFmQRG_hZvqT31wNhyceyLWSLkqEw",
  authDomain: "wulan-diaz-greeting.firebaseapp.com",
  databaseURL: "https://wulan-diaz-greeting-default-rtdb.firebaseio.com",
  projectId: "wulan-diaz-greeting",
  storageBucket: "wulan-diaz-greeting.firebasestorage.app",
  messagingSenderId: "506357529163",
  appId: "1:506357529163:web:484ae0063107490e27ebce",
  measurementId: "G-NM7EQMBVQB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Realtime Database service
const database = getDatabase(app);

export { database, ref, onValue, set }; // Export what you need for your components
