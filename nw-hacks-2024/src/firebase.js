import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

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

const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
    }).catch((error) => {
        console.log(error);
    });
};
export {signInWithGoogle, auth, app};