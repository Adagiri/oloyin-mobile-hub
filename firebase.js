import firebase from "firebase/app";
// import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD42gyRbt_aCJmGZDr-hNo13Ea5z9Oldkg",
  authDomain: "oloyin-mobile-hub.firebaseapp.com",
  projectId: "oloyin-mobile-hub",
  storageBucket: "oloyin-mobile-hub.appspot.com",
  messagingSenderId: "539001250651",
  appId: "1:539001250651:web:12fcce40cd60f77c10307e",
  measurementId: "G-CM3X47HHH7",
};

try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

 export default firebase
