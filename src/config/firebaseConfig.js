import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "gitfireapp-8ec8f.firebaseapp.com",
  projectId: "gitfireapp-8ec8f",
  storageBucket: "gitfireapp-8ec8f.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
