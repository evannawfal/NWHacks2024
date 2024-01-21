import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

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
const db = getDatabase();

let emailAddress;
let profilePicture;

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    emailAddress = user.email;
    profilePicture = user.photoURL;

    // Assuming user.uid is the unique identifier for the user
    set(ref(db, 'users/' + user.uid), {
      email: user.email,
      profilePic: user.photoURL
    });
  } catch (error) {
    console.error("Error signing in or adding document: ", error);
  }
};

export { signInWithGoogle, auth, app, emailAddress, profilePicture};