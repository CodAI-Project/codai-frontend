// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3ySG8RyS6wix-O8noYsK9tPa1W2sPo3o",
  authDomain: "codai-development.firebaseapp.com",
  projectId: "codai-development",
  storageBucket: "codai-development.appspot.com",
  messagingSenderId: "190262650042",
  appId: "1:190262650042:web:d7b2c3fafbf815faf50e83",
  measurementId: "G-M115V5N9DS"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth }