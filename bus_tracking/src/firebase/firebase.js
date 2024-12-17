// views/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChW576jwvVZYQJ6Fy1NPthH5eBeTf3WLI",
    authDomain: "translator-f9772.firebaseapp.com",
    projectId: "translator-f9772",
    storageBucket: "translator-f9772.appspot.com",
    messagingSenderId: "338629626503",
    appId: "1:338629626503:web:c9a9f2767f112d1ec88622",
    measurementId: "G-1H16RJE596",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
