import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";

var firebaseConfig = {
  apiKey: "AIzaSyCwL1qFBuhKlsg999QQBfRmyKgsy0oal_I",
  authDomain: "community-talks.firebaseapp.com",
  databaseURL:
    "https://community-talks-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "community-talks",
  storageBucket: "community-talks.appspot.com",
  messagingSenderId: "459409942678",
  appId: "1:459409942678:web:8f6bb36fc860afc35d3ab7",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
