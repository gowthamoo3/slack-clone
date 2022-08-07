// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx1oySgSvyqkwkudplgP31YVFgTZYsuRE",
  authDomain: "slack-clone-e23d0.firebaseapp.com",
  projectId: "slack-clone-e23d0",
  storageBucket: "slack-clone-e23d0.appspot.com",
  messagingSenderId: "393048289241",
  appId: "1:393048289241:web:4269f1c1e0900c652f33c8",
  measurementId: "G-VRSGRL305Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
