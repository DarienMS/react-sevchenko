// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGL_GwKHFPJLMIH7Zcd4eq5wwBdn95lus",
  authDomain: "oasisbar-efbf2.firebaseapp.com",
  projectId: "oasisbar-efbf2",
  storageBucket: "oasisbar-efbf2.appspot.com",
  messagingSenderId: "982240501262",
  appId: "1:982240501262:web:836a9be8769411705f265f",
  measurementId: "G-4J54NRTJ2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);