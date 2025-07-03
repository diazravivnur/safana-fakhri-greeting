// firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAWJUXATGLKuLzGxvL9tZlRFIc0yRIZkms",
  authDomain: "guest-book-wulandiaz.firebaseapp.com",
  databaseURL:
    "https://guest-book-wulandiaz-default-rtdb.asia-southeast1.firebasedatabase.app", // ✅ tambahkan ini
  projectId: "guest-book-wulandiaz",
  storageBucket: "guest-book-wulandiaz.appspot.com",
  messagingSenderId: "568362231163",
  appId: "1:568362231163:web:e8e402bceaef0d81d249de",
  measurementId: "G-QGJRZXDTSL",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const database = getDatabase(app);

export { database };
