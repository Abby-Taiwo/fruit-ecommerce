// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU0MldfzZ4J6l1cl3juzd6Gb1f1-NNldY",
  authDomain: "hopping-app.firebaseapp.com",
  projectId: "hopping-app",
  storageBucket: "hopping-app.appspot.com",
  messagingSenderId: "453338601374",
  appId: "1:453338601374:web:79edf2d246fab83627e88f",
  measurementId: "G-31D1RRE0FM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
