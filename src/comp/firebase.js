import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCrDjaqRCrW26x3cFzgCQWmEgbkZ29TN0s",
    authDomain: "app-d650c.firebaseapp.com",
    databaseURL: "https://app-d650c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "app-d650c",
    storageBucket: "app-d650c.appspot.com",
    messagingSenderId: "252842130133",
    appId: "1:252842130133:web:2047f2c9c3cc62d4d4005c",
    measurementId: "G-MDF13482FC"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();

export { db, app, auth }