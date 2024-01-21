import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";

export function Navbar() {

    const navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsUserLoggedIn(!!user); // Set true if user is logged in, false otherwise
        });

        return () => {
            unsubscribe(); // Cleanup function to unsubscribe from onAuthStateChanged
        };
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate("/login");
                console.log("Signed out successfully");
            })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    };

    return (
        <div className="Navbar">
            <h1>NAVBAR</h1>
            {isUserLoggedIn && (
                <button onClick={handleLogout}>Sign Out</button>
            )}
        </div>
    );
}