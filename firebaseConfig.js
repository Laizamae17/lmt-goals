import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXhg8eQ30K9FZaVRaUwRgx0tNEBz2yTY8",
  authDomain: "lmt-goals.firebaseapp.com",
  projectId: "lmt-goals",
  storageBucket: "lmt-goals.firebasestorage.app",
  messagingSenderId: "1050525470107",
  appId: "1:1050525470107:web:05d1296aff470cf70c653e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)