// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const config = {
//   apiKey: 'AIzaSyA2x-ImaadFdq06GM2o_JCDHRyOYChfkos',
//   authDomain: 'soccerstore-v1.firebaseapp.com',
//   projectId: 'soccerstore-v1',
//   storageBucket: 'soccerstore-v1.appspot.com',
//   messagingSenderId: '248405608673',
//   appId: '1:248405608673:web:6ce41b804080d92bff4fa0',
// };

// // // Initialize Firebase
// const FIREBASE = initializeApp(config);

firebase.initializeApp({
  apiKey: 'AIzaSyBCqd8t6Fzcanowysxknsyo7kucRcGT8ic',
  authDomain: 'rn-soccerstore-v1.firebaseapp.com',
  projectId: 'rn-soccerstore-v1',
  storageBucket: 'rn-soccerstore-v1.appspot.com',
  messagingSenderId: '905470300670',
  appId: '1:905470300670:web:9bad521745a9675bc4b0af',
});
const FIREBASE = firebase;

export default FIREBASE;
