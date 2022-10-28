// Import the functions you need from the SDKs you need
import * as fbase from 'firebase'

import firebase from 'firebase/app';
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwtz42h4BAHaVIHT7lsauv0srviN_Gh3U",
  authDomain: "fir-native-3eb2d.firebaseapp.com",
  projectId: "fir-native-3eb2d",
  storageBucket: "fir-native-3eb2d.appspot.com",
  messagingSenderId: "102552295759",
  appId: "1:102552295759:web:3d74ebf8783700ed4dcd3a"
};

// Initialize Firebase

let app;
if(fbase.apps.length === 0)
{
    app = fbase.initializeApp(firebaseConfig);
}
else
{
    app = fbase.app();
}

const auth = fbase.auth();


export { auth  , firebase};
