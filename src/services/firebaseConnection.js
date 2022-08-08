import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyBvHnI8HtXVVhA1YJ_1aoQa8bkTGupLIVE",
  authDomain: "tarefas-f3880.firebaseapp.com",
  databaseURL: "https://tarefas-f3880-default-rtdb.firebaseio.com",
  projectId: "tarefas-f3880",
  storageBucket: "tarefas-f3880.appspot.com",
  messagingSenderId: "130441037344",
  appId: "1:130441037344:web:5510a21087069ccb759e45",
  measurementId: "G-49MDC9HCHW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
