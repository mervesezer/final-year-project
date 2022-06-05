import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import * as firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMlMQuLHKESD9CrDxG9zv9jsTWZJEm_0c",
  authDomain: "schema-backend.firebaseapp.com",
  projectId: "schema-backend",
  storageBucket: "schema-backend.appspot.com",
  messagingSenderId: "258226824387",
  appId: "1:258226824387:web:baf41b393c1ee0a4afee76",
};

// Initialize Firebase
let app;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = firestore.getFirestore();
const auth = getAuth(app);



export { auth, db };

