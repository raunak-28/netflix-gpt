// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_a2axIcXsVFpPHHOnlnZln1YR7e354Dw",
  authDomain: "netflix-gpt-6d00c.firebaseapp.com",
  projectId: "netflix-gpt-6d00c",
  storageBucket: "netflix-gpt-6d00c.appspot.com",
  messagingSenderId: "977467548917",
  appId: "1:977467548917:web:b89970ece4ae60dba811bc",
  measurementId: "G-DWJ2ERQWDQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
