import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyALap0aibRwHSvDroeTLmgQO0xKAhZAeIs",
  authDomain: "cart-abc9d.firebaseapp.com",
  projectId: "cart-abc9d",
  storageBucket: "cart-abc9d.appspot.com",
  messagingSenderId: "1011433903236",
  appId: "1:1011433903236:web:27051e900af826be3d1ed1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





