import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBLkvyZWls-a2rfiYkxIr3ebtDR0qeCqnw",
    authDomain: "timecrunch-ff55e.firebaseapp.com",
    databaseURL: "https://timecrunch-ff55e.firebaseio.com",
    projectId: "timecrunch-ff55e",
    storageBucket: "timecrunch-ff55e.appspot.com",
    messagingSenderId: "360045678172",
    appId: "1:360045678172:web:0daa6b7d99d1b1b1b9e099",
    measurementId: "G-5EKLGRYKSJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();
  
  // read that the below code is now a 'Default' case - and the whole... 
  // setting will be deprecated - read advice to remove it
  // db.settings({ timestampsInSnapshots: true });

  export default db;

