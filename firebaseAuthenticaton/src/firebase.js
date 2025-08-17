// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKxcj2Nvf0bHxfrrjpcrJZU2SX2tMuUhY",
  authDomain: "asrafulfire-6dea5.firebaseapp.com",
  projectId: "asrafulfire-6dea5",
  storageBucket: "asrafulfire-6dea5.firebasestorage.app",
  messagingSenderId: "591728090067",
  appId: "1:591728090067:web:fcb15aa8581ce75f2aed26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
export { registerWithEmailPassword };
