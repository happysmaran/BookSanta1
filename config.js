import firebase from 'firebase';
require('@firebase/firestore');
const firebaseConfig = {
    apiKey: "AIzaSyBuRKmgB2ZxDtzPOOdmKPcJvKgPsuMx8C4",
    authDomain: "book-santa-e2679.firebaseapp.com",
    databaseURL: "https://book-santa-e2679.firebaseio.com",
    projectId: "book-santa-e2679",
    storageBucket: "book-santa-e2679.appspot.com",
    messagingSenderId: "115862784650",
    appId: "1:115862784650:web:f313218c671cf755c7bb73"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();