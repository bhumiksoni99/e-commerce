import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBSOl8TBv50KQEnarrCsHNU57OhSJ-JP-8",
    authDomain: "e-commerce-db-dbe58.firebaseapp.com",
    databaseURL: "https://e-commerce-db-dbe58.firebaseio.com",
    projectId: "e-commerce-db-dbe58",
    storageBucket: "",
    messagingSenderId: "262224557771",
    appId: "1:262224557771:web:962186ebd0fb0ed97a8d4e",
    measurementId: "G-K9BJ6164F9"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//for google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'}) // this ensures we get the pop up with the accounts
export const signInWithGoogle = () => auth.signInWithPopup(provider) //only google accounts in the popup and not twitter/facebook etc.

export default firebase