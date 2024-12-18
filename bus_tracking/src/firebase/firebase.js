// views/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAOAPSUbNTn_6BcGlhzD50ZSRcVTHOW_hI",
    authDomain: "route-7b721.firebaseapp.com",
    projectId: "route-7b721",
    storageBucket: "route-7b721.firebasestorage.app",
    messagingSenderId: "148523132343",
    appId: "1:148523132343:web:db3538ecd988e5c58eb432",
    measurementId: "G-44GG66PHBF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
