// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR59aS-5YnBChJUg997B_YayhkDc2o2Ds",
  authDomain: "follow-my-page.firebaseapp.com",
  projectId: "follow-my-page",
  storageBucket: "follow-my-page.appspot.com",
  messagingSenderId: "1059843890462",
  appId: "1:1059843890462:web:8491c988113a6e795dbd0f",
  measurementId: "G-NGJC3768D8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export const storeData = async(email, password) => {
  const docRef = await addDoc(collection(db, "users"), {
    email, password
  })

};
