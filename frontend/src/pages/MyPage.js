import "../Add-Style/UserMyPage.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function MyPage (){
    const { trainer } = useParams();
    const [user, setUser] = useState([]);
    const [team, setTeam] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { auth } = useAuth();
    const { username } = useAuth()

    const getTrainer = async (person) => {
        const url = `http://localhost:4000/users/username/${person}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setUser(responseJSON[0]);
        }
    };

    useEffect(() => {
        getTrainer(trainer);
    }, [trainer]);

    let loggedIn
    let loggedOut
    console.log(user.username)
    
    if (auth) {
        loggedIn = (
            <>
                <div>hi</div>
                <div>{user.id}</div>
                
            </>
        )
    } else {
        loggedOut = (
            <>
                <div>log in now!</div>
            </>
        )
    }

    return (
        <>
            {loggedIn}
            {loggedOut}
        </>
    )
}

export default MyPage