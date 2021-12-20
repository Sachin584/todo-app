import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


var firebaseConfig = {
  apiKey: "AIzaSyASVYLCtg_HAa5NX5g8Nz_hTwnVhyOdy5o",
  authDomain: "todo-58f70.firebaseapp.com",
  projectId: "todo-58f70",
  storageBucket: "todo-58f70.appspot.com",
  messagingSenderId: "227203120002",
  appId: "1:227203120002:web:e8a40518ecf9a009ae2d9b",
  measurementId: "G-8LGTPWVC5X"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
