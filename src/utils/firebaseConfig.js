import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "instagram-app-phh.firebaseapp.com",
  projectId: "instagram-app-phh",
  storageBucket: "instagram-app-phh.appspot.com",
  messagingSenderId: "686086153883",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-15B2EKYJ2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);