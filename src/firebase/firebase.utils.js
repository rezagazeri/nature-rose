import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
