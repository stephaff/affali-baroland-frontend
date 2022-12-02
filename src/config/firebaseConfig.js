import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqjVHFUZUr0Sfay2TERuwCJaHVakQwIfk",
  authDomain: "mon-premier-projet-77ff4.firebaseapp.com",
  projectId: "mon-premier-projet-77ff4",
  storageBucket: "mon-premier-projet-77ff4.appspot.com",
  messagingSenderId: "15226594970",
  appId: "1:15226594970:web:7bdd08d95da2c597f5a123",
  measurementId: "G-SPN8Y9MTEJ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
// export default auth;
  