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
    const [teams, setTeams] = useState([]);
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

    const getTeams = async () => {
        const url = `http://localhost:4000/battleteams/`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setTeams(responseJSON);
        }
    };

    useEffect(() => {
        fetchData();
        getTeams();
    }, []);

    let ifLoggedIn;
    let ifLoggedOut;

    const myTeam = teams.filter((team) => team.user_id === y);
    const newTeam = myTeam && myTeam[0];
    console.log(newTeam);

    // Need an if statement: If newTeam is undefined, the Enter My Page button should be hidden!
    // let activeTeam;
    // if (newTeam === undefined) {
    //     activeTeam = (
    //         <>
    //             <div className="scroll-down">
    //                 <h2>If page isn't loading, then press this button once!</h2>
    //                 <button onClick={handleSubmit}>Activate MyPage</button>
    //             </div>
    //         </>
    //     );
    // } else {
    //     activeTeam = (
    //         <>
    //             <div className="">
    //                 <Link to={`/userpage/${filteredUser[0].id}`}>
    //                     <h1>
    //                         <div className="EnterButton"> Enter My Page </div>
    //                     </h1>
    //                 </Link>
    //             </div>
    //         </>
    //     );
    // }

    if (auth) {
        if (trainers.length > 0) {
            const filteredUser = trainers.filter(
                (user) => user.username === username
            );
            // console.log(filteredUser[0].id);
            const battleTeamValues = {
                slot_1: "pikachu",
                slot_2: "pikachu",
                slot_3: "pikachu",
                slot_4: "pikachu",
                slot_5: "pikachu",
                slot_6: "pikachu",
                user_id: y,
            };

            const favoriteValues = {
                pokemon: "pikachu",
                user_id: y,
                shiny: false,
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

            let activeTeam;
            if (newTeam === undefined) {
                activeTeam = (
                    <>
                        <div className="CenterIt">
                            <h1>Are you ready to be a Pokémon Master?!</h1>
                            <button className="EnterButton" onClick={handleSubmit}>Start Your Journey Here!</button>
                        </div>
                    </>
                );
            } else {
                activeTeam = (
                    <>
                        <div className="">
                            <Link to={`/userpage/${filteredUser[0].id}`}>
                                <h1>
                                    <div className="EnterButton"> Enter My Page </div>
                                </h1>
                            </Link>
                        </div>
                    </>
                );
            }

            ifLoggedIn = (
                <>
                {activeTeam}
                    {/* <div className="">
                        <div className="">
                            <Link to={`/userpage/${filteredUser[0].id}`}>
                                <h1>
                                    <div className="EnterButton">
                                        {" "}
                                        Enter My Page{" "}
                                    </div>
                                </h1>
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
                    </div> */}
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
                        <img
                            className="errorImg"
                            src="https://www.media.pokekalos.fr/img/site/erreur404.png"
                            alt="Oops! Page not found..."
                        />
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
