// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsUUBBbCaNeyLrDjZYiyrUFX_VB6dfdfs",
    authDomain: "assignment-10-5a266.firebaseapp.com",
    projectId: "assignment-10-5a266",
    storageBucket: "assignment-10-5a266.appspot.com",
    messagingSenderId: "710101456721",
    appId: "1:710101456721:web:2f0561b0d7418d7e066570"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;