// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQyriyxTS3XfvwzoWqHXNTa3TSENQUvMw",
  authDomain: "ctms-e3388.firebaseapp.com",
  projectId: "ctms-e3388",
  storageBucket: "ctms-e3388.appspot.com",
  messagingSenderId: "351486702567",
  appId: "1:351486702567:web:33c942d011e5ffc5be4342",
  measurementId: "G-TQGW8EEYHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);