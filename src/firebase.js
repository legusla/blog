import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx6B4YINVbxbyj439AgUfZfPnY3G8-PnA",
  authDomain: "chatonline-ff8d8.firebaseapp.com",
  projectId: "chatonline-ff8d8",
  storageBucket: "chatonline-ff8d8.appspot.com",
  messagingSenderId: "771792460102",
  appId: "1:771792460102:web:f263b446678408b53f6d47"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = firebaseApp.firestore();

  export {db, auth, provider}









