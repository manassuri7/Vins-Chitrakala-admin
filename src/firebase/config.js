import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkhsmfdTied9ialNI679HDHRSPW1guYOE",
  authDomain: "vinschitrakala.firebaseapp.com",
  databaseURL: "https://vinschitrakala-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vinschitrakala",
  storageBucket: "vinschitrakala.appspot.com",
  messagingSenderId: "376819881983",
  appId: "1:376819881983:web:afd9e5c60f0c2aaebe39ca",
  measurementId: "G-XSBLH8WLWP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
