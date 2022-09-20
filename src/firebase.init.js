// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCmmlN1yboYqc3oKWPfwNpi-TWqdRVEuwE",
    authDomain: "chat-application-1269c.firebaseapp.com",
    projectId: "chat-application-1269c",
    storageBucket: "chat-application-1269c.appspot.com",
    messagingSenderId: "1007714093585",
    appId: "1:1007714093585:web:4ef3ac60910193a775bfb0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()