import React from "react";
import { useState, useEffect } from "react";

function GrabUserName({ User }) {
    const [user, setUser] = useState(null);

    const getUser = async (apples) => {
        const url = `http://localhost:4000/users/${apples}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON && responseJSON.length > 0) {
            setUser(responseJSON[0]); // Assuming the user data is an array.
        }

    };

    useEffect(() => {
        if (User) {
            getUser(User);
        }
    }, [User]);

    
    const username = user && user.username ? user.username : null;

    if (user === null) {
        return (
            <>
                <p>Loading...</p>
            </>
        );
    }

    return (
        <>
            <p>{username}</p>
        </>
    );
}


export default GrabUserName;
