// Import the functions you need from the SDKs you need
import {firebase} from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyA2x-ImaadFdq06GM2o_JCDHRyOYChfkos',
//   authDomain: 'soccerstore-v1.firebaseapp.com',
//   projectId: 'soccerstore-v1',
//   storageBucket: 'soccerstore-v1.appspot.com',
//   messagingSenderId: '248405608673',
//   appId: '1:248405608673:web:6ce41b804080d92bff4fa0',
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp({
  apiKey: 'AIzaSyA2x-ImaadFdq06GM2o_JCDHRyOYChfkos',
  authDomain: 'soccerstore-v1.firebaseapp.com',
  projectId: 'soccerstore-v1',
  storageBucket: 'soccerstore-v1.appspot.com',
  messagingSenderId: '248405608673',
  appId: '1:248405608673:web:6ce41b804080d92bff4fa0',
});
const firebaseConfig = firebase;

export default firebaseConfig;
