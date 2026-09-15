// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCHMnPUvPbFfoGEieTjSjVHw3pz8d6CMQ",
  authDomain: "netflixgpt-95318.firebaseapp.com",
  projectId: "netflixgpt-95318",
  storageBucket: "netflixgpt-95318.firebasestorage.app",
  messagingSenderId: "985811802683",
  appId: "1:985811802683:web:def6aab3226d610b2f5a1e",
  measurementId: "G-2FMTMMT5N2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(getAuth());
export const auth = getAuth();
