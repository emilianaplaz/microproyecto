import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{collection, getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZt-GEAEOmtdFpSAjBtKG6rfFw3Oou4dE",
  authDomain: "microproyecto-2-6a48c.firebaseapp.com",
  projectId: "microproyecto-2-6a48c",
  storageBucket: "microproyecto-2-6a48c.appspot.com",
  messagingSenderId: "332157193805",
  appId: "1:332157193805:web:0fe62be5f22a3384269604",
  measurementId: "G-G3XW2BBK13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app

const db = getFirestore();

export const usuariosCollection = collection(db, 'usuarios');


// getDocs(coll)
//   .then ((snapshot)=>{
//     console.log(snapshot.docs)
//   })