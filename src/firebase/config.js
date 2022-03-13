import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore , collection , doc, setDoc,connectFirestoreEmulator } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyASy9bAcR3b_-vhNw6bnPa0OSJ-j-YyftA",
    authDomain: "facebook-app-70c90.firebaseapp.com",
    projectId: "facebook-app-70c90",
    storageBucket: "facebook-app-70c90.appspot.com",
    messagingSenderId: "612335233802",
    appId: "1:612335233802:web:7113be30ce15fa9bf568f3",
    measurementId: "G-JXZ0QN7TKC"
  };
  const app=  firebase.initializeApp(firebaseConfig)
  export const auth = app.auth()
  export const db = getFirestore();
  auth.useEmulator('http://localhost:9099')
  if ( window.location.hostname=="localhost"){
    connectFirestoreEmulator (db,'localhost' , '8080')
  }
export default app