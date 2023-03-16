// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSjlz0PHBieDd1XFlfEqG7iW8gz_CbGF0",
  authDomain: "test-auth-47c07.firebaseapp.com",
  projectId: "test-auth-47c07",
  storageBucket: "test-auth-47c07.appspot.com",
  messagingSenderId: "721719898258",
  appId: "1:721719898258:web:ae8a6902d950f0cbf6364b",
  measurementId: "G-PWFG6X9EHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  db,
  addDoc,
  collection
};
