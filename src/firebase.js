// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCZwIgE3AW5Hpt3BTmw6KxLoPHw6pmZp6A",
  authDomain: "web-kelas-f262d.firebaseapp.com",
  projectId: "web-kelas-f262d",
  storageBucket: "web-kelas-f262d.appspot.com",
  messagingSenderId: "796174672616",
  appId: "1:796174672616:web:47fda115721f70042a1f5d",
  measurementId: "G-QH2Z80TYBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();