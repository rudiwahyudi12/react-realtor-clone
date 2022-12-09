// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdO_eJLsr4X1S9MdGyzbh3CzzKKbB90nM",
  authDomain: "realtor-clone-app-3777c.firebaseapp.com",
  projectId: "realtor-clone-app-3777c",
  storageBucket: "realtor-clone-app-3777c.appspot.com",
  messagingSenderId: "931131267258",
  appId: "1:931131267258:web:61f34570e751c333d1ca83"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();