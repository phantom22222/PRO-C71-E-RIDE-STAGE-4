import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDmRAsn-SPYNvaKRNjQFfJtgousLUPUrvM",
    authDomain: "e-ride-stage-4-da98f.firebaseapp.com",
    projectId: "e-ride-stage-4-da98f",
    storageBucket: "e-ride-stage-4-da98f.appspot.com",
    messagingSenderId: "500539822869",
    appId: "1:500539822869:web:e7c7dc0644487a6d968f1c",
    measurementId: "G-XGEP9H56WC"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
