import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { async } from 'q';

const Config={
        apiKey: "AIzaSyD_fIK6VkNfuXQoHD99I9Gy8KoTu-5-vkc",
        authDomain: "nature-rose.firebaseapp.com",
        databaseURL: "https://nature-rose.firebaseio.com",
        projectId: "nature-rose",
        storageBucket: "nature-rose.appspot.com",
        messagingSenderId: "967232736512",
        appId: "1:967232736512:web:cd58109fd52a0c539677e5",
        measurementId: "G-S6B85WE9D2"
      };
firebase.initializeApp(Config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertSnapshotCollectionToObject = snapshot =>{
    const arrayDocuments =  snapshot.docs.map(doc=>{
        const {title,items}=doc.data();
        return{
          id : snapshot.id,
          routeName:encodeURI(title.toLowerCase()),
          items,
          title
        }
      })
    return arrayDocuments.reduce((accumulator,doc)=>{
      accumulator[doc.title.toLowerCase()] = doc;
      return accumulator;
    },{})
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
