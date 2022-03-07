import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//App config we get from the google firebase site
const config = {
  apiKey: "AIzaSyBSojLblhBGMgkO9DXp8KQcPv2GzFL8Bi8",
  authDomain: "react-firebase-e-commerce-db.firebaseapp.com",
  projectId: "react-firebase-e-commerce-db",
  storageBucket: "react-firebase-e-commerce-db.appspot.com",
  messagingSenderId: "366251420012",
  appId: "1:366251420012:web:5be25c068809678d302b49",
  measurementId: "G-MMSM608PW9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

//using signIn only with google popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;