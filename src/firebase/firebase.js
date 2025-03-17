// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvFZlNIJuWJz7mwy_R2vGo4-EmMp16ckc",
  authDomain: "stack-cash.firebaseapp.com",
  projectId: "stack-cash",
  storageBucket: "stack-cash.firebasestorage.app",
  messagingSenderId: "779100452263",
  appId: "1:779100452263:web:329e4d45a9c0b9428eb282",
  measurementId: "G-GT3MZTQ9VB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
