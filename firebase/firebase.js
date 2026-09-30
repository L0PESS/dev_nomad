// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBN7IYJGOP7o9xUlL19iF04lye6wzvQoco",
  authDomain: "dev-nomad-lopes.firebaseapp.com",
  projectId: "dev-nomad-lopes",
  storageBucket: "dev-nomad-lopes.firebasestorage.app",
  messagingSenderId: "857858766163",
  appId: "1:857858766163:web:ee156ef91c62d103695da6",
  measurementId: "G-RJ13QFKLM9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);