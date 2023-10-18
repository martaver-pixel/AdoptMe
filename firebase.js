import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjTqkd1NcXvvzj3RZqsBLoAgvnl9bv9Hc",
  authDomain: "adoptme-144db.firebaseapp.com",
  projectId: "adoptme-144db",
  storageBucket: "adoptme-144db.appspot.com",
  messagingSenderId: "762708597663",
  appId: "1:762708597663:web:c2d26ca96d8bc1fa1f7baa",
  measurementId: "G-PW5SCC3XBS",
};

const app = initializeApp(firebaseConfig);
export const dbAuth = getAuth(app);
export const db = getFirestore(app);
