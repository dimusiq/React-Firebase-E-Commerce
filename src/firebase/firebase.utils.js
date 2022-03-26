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


//function that allow us to take user off object //that we got back from our authentication library and //then store inside of our database
export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
 

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.messages);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)

  })
  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return{
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
      }, reject);
  });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

//using signIn only with google popup
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;