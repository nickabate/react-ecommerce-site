// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5ZHNcGwqgvmJ0E9k88yV9THmI9ogIkSM",
  authDomain: "react-ecommerce-db-16cfc.firebaseapp.com",
  projectId: "react-ecommerce-db-16cfc",
  storageBucket: "react-ecommerce-db-16cfc.appspot.com",
  messagingSenderId: "108287529205",
  appId: "1:108287529205:web:e408b0486c1b520f1e75bc",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
