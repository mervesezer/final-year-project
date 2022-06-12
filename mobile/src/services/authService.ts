import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebaseService";

export const registerUser = async (registerForm) => {
  const creds = await createUserWithEmailAndPassword(
    auth,
    registerForm.email,
    registerForm.password
  );

  const id = creds.user.uid;

  await setDoc(doc(db, "users", id), {
    name: registerForm.name,
    lastName: registerForm.lastName,
  });
};
