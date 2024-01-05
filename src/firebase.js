import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBm2sJhdRq8jZOOVDTerS1cBlcjRdqNPIc",
    authDomain: "chat-app1-e72e3.firebaseapp.com",
    projectId: "chat-app1-e72e3",
    storageBucket: "chat-app1-e72e3.appspot.com",
    messagingSenderId: "77672474962",
    appId: "1:77672474962:web:ee99a1e48a40f89419728b"
 };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()

