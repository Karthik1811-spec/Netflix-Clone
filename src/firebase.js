import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// import { addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCD25Ps9rUN5JF05tldygcQh3g4pEs-0cI",
  authDomain: "netflix-clone-90ee7.firebaseapp.com",
  projectId: "netflix-clone-90ee7",
  storageBucket: "netflix-clone-90ee7.firebasestorage.app",
  messagingSenderId: "668824721072",
  appId: "1:668824721072:web:fb94d4ab39307d020e4d75",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error("Invalid email or password");
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error("Invalid email or password");
  }
};

const logout = async () => {
  await signOut(auth);
};

export { auth, db, login, signup, logout };
