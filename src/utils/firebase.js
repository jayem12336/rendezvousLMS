import firebase from 'firebase'
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyCzbQFDXd66J_ySAKKbGZqB2XFz5eE11hc",
  authDomain: "sample-f269e.firebaseapp.com",
  projectId: "sample-f269e",
  storageBucket: "sample-f269e.appspot.com",
  messagingSenderId: "446632942715",
  appId: "1:446632942715:web:ceccc17fa45d002769d6de",
  measurementId: "G-YZZCGY7BMG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export {db, auth, provider, storage }
export default firebase;