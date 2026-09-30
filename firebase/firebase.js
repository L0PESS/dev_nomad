import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyBN7IYJGOP7o9xUlL19iF04lye6wzvQoco",
  authDomain: "dev-nomad-lopes.firebaseapp.com",
  projectId: "dev-nomad-lopes",
  storageBucket: "dev-nomad-lopes.firebasestorage.app",
  messagingSenderId: "857858766163",
  appId: "1:857858766163:web:ee156ef91c62d103695da6",
  measurementId: "G-RJ13QFKLM9"
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);