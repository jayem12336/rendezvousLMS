import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCBaA0LXvacmXOkfAWmig7sWnGL3X0WL_M",
  authDomain: "rendezvous-8a6ae.firebaseapp.com",
  projectId: "rendezvous-8a6ae",
  storageBucket: "rendezvous-8a6ae.appspot.com",
  messagingSenderId: "954172740891",
  appId: "1:954172740891:web:2f73fffff9c0652c0bafbe",
  measurementId: "G-TTYY37RW5S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export {db, auth, provider, storage }
export default firebase;