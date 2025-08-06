// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmNC-3spi6nEU6QyXde0iYeaDR5fpFtZY",
  authDomain: "to-do-app-251f3.firebaseapp.com",
  projectId: "to-do-app-251f3",
  storageBucket: "to-do-app-251f3.firebasestorage.app",
  messagingSenderId: "295755793717",
  appId: "1:295755793717:web:886679a00839277125387c",
  measurementId: "G-N1WWEWG2XQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// firebase.js






