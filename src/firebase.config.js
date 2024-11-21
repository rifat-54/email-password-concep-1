// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHimmjFd2hpd51WpbgLwNaEnWC58OsiBo",
  authDomain: "fir-first-concep-66c67.firebaseapp.com",
  projectId: "fir-first-concep-66c67",
  storageBucket: "fir-first-concep-66c67.firebasestorage.app",
  messagingSenderId: "654404937386",
  appId: "1:654404937386:web:8877879bdccbaa413292d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;