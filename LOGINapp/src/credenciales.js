// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP7zlc1YMFxXCJJeRhMJkFiXhytsh_QNY",
  authDomain: "cruddb-64b06.firebaseapp.com",
  projectId: "cruddb-64b06",
  storageBucket: "cruddb-64b06.firebasestorage.app",
  messagingSenderId: "498699438597",
  appId: "1:498699438597:web:4e63ccf8f380bb26a62a6c"
};

// Initialize Firebase
const appFirebase= initializeApp(firebaseConfig);

export default appFirebase; 
