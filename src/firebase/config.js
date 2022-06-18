// import { initializeApp } from 'firebase/app';

import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'

import 'firebase/compat/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDTOZaM-KAfVfRooKaqHRfhUc9eO736pUc',
  authDomain: 'firegram-cc77c.firebaseapp.com',
  projectId: 'firegram-cc77c',
  storageBucket: 'firegram-cc77c.appspot.com',
  messagingSenderId: '1051830148788',
  appId: '1:1051830148788:web:8222928fd8d0a3e596c1e1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage()

export const projectFirestore = firebase.firestore()

export const timestamp = firebase.firestore.FieldValue.serverTimestamp

export default firebase
