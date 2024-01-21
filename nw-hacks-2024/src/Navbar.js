import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "./firebase.js"
import { useState } from 'react';


export function Navbar() {
    const navigate = useNavigate();
    const [logged, isLogged] = useState(false);

    const logOut = () => {
        signOut(auth);
        navigate("/login");
    };

    function handleLog() {
        isLogged(true);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

            }
        });

    }, []);


    return (
        <div className="Navbar">
            <h1>NAVBAR</h1>
            {logged && <button onClick={logOut}>Log Out</button>}
        </div>
    )
}

