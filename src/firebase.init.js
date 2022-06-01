import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCmBtSc-OyeSTp0rCuuRzTGv0r_-eRr_JY",
  authDomain: "warehouses-d0d0c.firebaseapp.com",
  projectId: "warehouses-d0d0c",
  storageBucket: "warehouses-d0d0c.appspot.com",
  messagingSenderId: "150159185325",
  appId: "1:150159185325:web:e618b5b66477a467b13d24"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
