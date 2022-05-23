// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAnuBJMQlwW0T-R6u2865ug4LZ0zE3xyM",
  authDomain: "manufacturers-dine.firebaseapp.com",
  projectId: "manufacturers-dine",
  storageBucket: "manufacturers-dine.appspot.com",
  messagingSenderId: "393390710207",
  appId: "1:393390710207:web:df20ddcb00918f1519550a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
