import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import "./styles.css"

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
            <img id="smalllogo" src={require('./Group_21.jpg')} />
            <h1 className="header" id="title">MeerKat</h1>
            {isUserLoggedIn && (
                <button id="signout" onClick={handleLogout}>Sign Out</button>
            )}
        </div>
    );
}