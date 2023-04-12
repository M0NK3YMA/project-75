import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-rVooWEuUH6Cd7Yase_1PmvffRZOlNbw",
  authDomain: "e-ride-ea1a1.firebaseapp.com",
  projectId: "e-ride-ea1a1",
  storageBucket: "e-ride-ea1a1.appspot.com",
  messagingSenderId: "75102179765",
  appId: "1:75102179765:web:b500e8a39d83c59dd509fc",
  measurementId: "G-R6ZET7CVTQ"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
