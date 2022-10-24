// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDY7HfWxnuNmR6CvDNC4ogwglZrsmRTx7Y",
    authDomain: "code-academy-client.firebaseapp.com",
    projectId: "code-academy-client",
    storageBucket: "code-academy-client.appspot.com",
    messagingSenderId: "289141425249",
    appId: "1:289141425249:web:0e9bd0545c354a18ff1620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;