// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAnRv2cvR2S3GoBt1k2ySKJQ7dQ-cH9mco",
  authDomain: "chatting-app-68c5b.firebaseapp.com",
  projectId: "chatting-app-68c5b",
  storageBucket: "chatting-app-68c5b.appspot.com",
  messagingSenderId: "398950797880",
  appId: "1:398950797880:web:66804efe052cfb284dcccd",
  measurementId: "G-SQS9DZGNLY",
};
let firebaseApp;
if (firebase) {
  if (firebase.apps.length === 0)
    firebaseApp = firebase.initializeApp(firebaseConfig);
  else firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
