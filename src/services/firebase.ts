// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5QQ0X4DJMXKsqAC38nbSlyLwjM3J7mkw',
  authDomain: 'bulb-subjects.firebaseapp.com',
  projectId: 'bulb-subjects',
  storageBucket: 'bulb-subjects.appspot.com',
  messagingSenderId: '1079618233296',
  appId: '1:1079618233296:web:f3fbe0e599a785fd0e0fd5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
