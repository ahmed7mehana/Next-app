// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyADM3tILgjMU1dnqN0x7ZFYoA1Q4T4nmrc",
  authDomain: "thebest-7f4e4.firebaseapp.com",
  projectId: "thebest-7f4e4",
  storageBucket: "thebest-7f4e4.appspot.com",
  messagingSenderId: "437668859994",
  appId: "1:437668859994:web:b50c062262240171840863"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
