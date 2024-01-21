import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC82G0eW8Sphq2Q6TuK0__uXvkJToXJ0OY",
  authDomain: "nwhacks2024-affe8.firebaseapp.com",
  projectId: "nwhacks2024-affe8",
  storageBucket: "nwhacks2024-affe8.appspot.com",
  messagingSenderId: "732641950384",
  appId: "1:732641950384:web:90161413440142633a9975",
  measurementId: "G-5TC78VY487"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const emailAddress = result.user.email;
    const profilePic = result.user.photoURL;

    const usersCollection = collection(db, 'users');
    const userEntity = { Email: emailAddress};
    await addDoc(usersCollection, userEntity);

   // console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error signing in or adding document: ", error);
  }
};

export { signInWithGoogle, auth, app };