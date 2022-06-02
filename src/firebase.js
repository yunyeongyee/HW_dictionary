// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: 'AIzaSyBqbGELbc8uFUr461q6NH1PPaibW7rjUaQ',
   authDomain: 'sparta-react-vocanote.firebaseapp.com',
   projectId: 'sparta-react-vocanote',
   storageBucket: 'sparta-react-vocanote.appspot.com',
   messagingSenderId: '1057906058113',
   appId: '1:1057906058113:web:fab6f0695003735a01fe80',
   measurementId: 'G-TMWNEZPZEB',
};

initializeApp(firebaseConfig);
export const db = getFirestore();

