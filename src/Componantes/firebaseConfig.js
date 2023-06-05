// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi4VcXcV6S3I1ehDBpgjgpRnh10TkSfsw",
  authDomain: "doc-81593.firebaseapp.com",
  projectId: "doc-81593",
  storageBucket: "doc-81593.appspot.com",
  messagingSenderId: "686559534336",
  appId: "1:686559534336:web:f7da60aa19cd3bb64267e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)