import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKcb7fLBcvQhJRIjb5aCrPGSSs1bzdCVg",
  authDomain: "mrcandycompany-555f5.firebaseapp.com",
  projectId: "mrcandycompany-555f5",
  storageBucket: "mrcandycompany-555f5.appspot.com",
  messagingSenderId: "611052022391",
  appId: "1:611052022391:web:6022775dcebad70366b472",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (name, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateCurrentUser(auth,{displayName:name});
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const db = getFirestore(app)
