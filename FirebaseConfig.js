import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlAJT3J7wwOaRe9ZzPHgUmQaIOvj3yZdI",
  authDomain: "travelapprn-3bfc4.firebaseapp.com",
  projectId: "travelapprn-3bfc4",
  storageBucket: "travelapprn-3bfc4.appspot.com",
  messagingSenderId: "478621263751",
  appId: "1:478621263751:web:91653e5d31c4e05f8cd522",
  measurementId: "G-XQTC70NK18",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
