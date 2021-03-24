import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAir3S-GKkvGd4U03WKOH7T32QyZLN95h0",
    authDomain: "clone-5b1e8.firebaseapp.com",
    projectId: "clone-5b1e8",
    storageBucket: "clone-5b1e8.appspot.com",
    messagingSenderId: "116631275079",
    appId: "1:116631275079:web:f7ca6d4cea2861a06c5362",
    measurementId: "G-5SJRH5DN11"
});


const auth = firebase.auth();

export { auth };