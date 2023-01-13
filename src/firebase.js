// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA4NFIEOlKAvVNEQC_QvR4aAACivzuKrAs',
  authDomain: 'free-f98bc.firebaseapp.com',
  projectId: 'free-f98bc',
  storageBucket: 'free-f98bc.appspot.com',
  messagingSenderId: '883051959550',
  appId: '1:883051959550:web:35b6827165d6c67e91c1af',
  measurementId: 'G-BZB218XF1V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };