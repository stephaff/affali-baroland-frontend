import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCN57hzfHWLGc7W-n8NdMNTCMHjNnT0RTs",
    authDomain: "baroland-726be.firebaseapp.com",
    projectId: "baroland-726be",
    storageBucket: "baroland-726be.appspot.com",
    messagingSenderId: "651178113484",
    appId: "1:651178113484:web:f66bdd9bcc87c3a3e34569",
    measurementId: "G-ZBY03QLHM8"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapShots : true });

  export default firebase;
  