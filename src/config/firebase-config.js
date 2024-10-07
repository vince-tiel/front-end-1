import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAlLGMzRkgnYtk9kIq1T2ySRfdpVnYiwR0",
  authDomain: "formation-f0515.firebaseapp.com",
  projectId: "formation-f0515",
  storageBucket: "formation-f0515.appspot.com",
  messagingSenderId: "340001597940",
  appId: "1:340001597940:web:fe74ca26ebafc295e771a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);