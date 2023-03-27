import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIebiafL18Ukxgk6u3K2f-cpixXZFqoh8",
  authDomain: "hoji-movie-app.firebaseapp.com",
  projectId: "hoji-movie-app",
  storageBucket: "hoji-movie-app.appspot.com",
  messagingSenderId: "725127528338",
  appId: "1:725127528338:web:4988b2d4db62186d7b8b4b",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
