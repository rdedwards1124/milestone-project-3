import "../Add-Style/UserMyPage.css";
import "../Add-Style/Error404.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function UserMyPage() {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");
    const { auth, username, userID } = useAuth();

    // Ensure userID is a number, default to null if not
    const x = parseInt(userID);
    const y = isNaN(x) ? null : x;

    const history = useHistory();

    async function fetchData() {
        try {
            const response = await fetch(`http://localhost:4000/users`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const resData = await response.json();
            setTrainers(resData);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    let ifLoggedIn;
    let ifLoggedOut;

    if (auth) {
        if (trainers.length > 0) {
            const filteredUser = trainers.filter(
                (user) => user.username === username
            );
            console.log(filteredUser[0].id);

            const battleTeamValues = {
                slot_1: null,
                slot_2: null,
                slot_3: null,
                slot_4: null,
                slot_5: null,
                slot_6: null,
                user_id: y,
            };

            const favoriteValues = {
                pokemon: "pikachu",
                user_id: y,
            };

            const handleSubmit = async (e) => {
                e.preventDefault();
                await fetch(`http://localhost:4000/battleteams/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(battleTeamValues),
                });

                await fetch(`http://localhost:4000/favorites/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(favoriteValues),
                });
                history.push(`/`);
            };

            ifLoggedIn = (
                <>
                    <div>
                        <div>
                            <Link to={`/userpage/${filteredUser[0].id}`}>
                                <h2>ENTER</h2>
                            </Link>
                        </div>
                        <div className="scroll-down">
                            <h2>
                                If page isn't loading, then press this button
                                once!
                            </h2>
                            <button onClick={handleSubmit}>
                                Activate MyPage
                            </button>
                        </div>
                    </div>
                </>
            );
        }
    }

    if (!auth) {
        ifLoggedOut = (
            <>
                <div className="CenterIt">
                    <div>
                        <h1>
                            Sorry... You must be logged in to access this page!
                        </h1>
                    </div>
                    <div className="div4Img">
                        <img className="errorImg" src="https://www.media.pokekalos.fr/img/site/erreur404.png" alt="Oops! Page not found..."/>
                    </div>
                    <div className="errorFooter">
                        <Link to={`/login`}>
                            <p>Log In Here!</p>
                        </Link>
                        <p>or</p>
                        <Link to={`/signup`}>
                            <p>Register Here!</p>
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {ifLoggedIn}
            {ifLoggedOut}
        </>
    );
}

export default UserMyPage;
