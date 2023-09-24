import "../Add-Style/UserMyPage.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

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
            // Check if trainers array is not empty
            // console.log(trainers[0].id);
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
                user_id: y
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
                history.push(`/`)
            };

            ifLoggedIn = (
                <>
                    <div>
                        <div>
                            <Link to={`/userpage/${filteredUser[0].id}`}>
                                <h2>ENTER</h2>
                            </Link>
                        </div>
                        <div className="scroll-down" >
                            <h2>If page isn't loading, then press this button once!</h2>
                            <button onClick={handleSubmit} >Activate MyPage</button>
                        </div>
                    </div>
                </>
            );
        }
    }

    if (!auth) {
        ifLoggedOut = (
            <>
                <div>
                    <div>
                        <h1>
                            Sorry... You must be logged in to access this page!
                        </h1>
                    </div>
                    <div>
                        <img src="https://www.media.pokekalos.fr/img/site/erreur404.png" />
                    </div>
                    <div>
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

    {


    /*
    
    const handleSubmit2 = async (e) => {
                e.preventDefault()
                await fetch(`http://localhost:4000/favorites/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(favoriteValues),
                });
            }
    
    
    */
        
        /* <div>
                        <h3>Dropdown Menu</h3>
                        {loading ? (
                        <p>Loading...</p>
                        ) : <form onSubmit={handleSubmit}>
                            <label htmlFor="dropdown">Select an option:</label>
                            <select
                                id="dropdown"
                                name="dropdown"
                                value={selectedOption}
                                onChange={handleOptionChange}
                            >
                                <option value="">select</option>
                                {userNames}
                            </select>
                            <br />
                            <input type="submit" value="Submit" />
                        </form>}
                        
                    </div> */
    }

    // return (
    //     <>
    //         <div className="CenterIt">
    //             {/* <h1>{UserName}</h1> */}
    //             <h1>USERNAME</h1>
    //             <div className="UserDetails">
    //                 <div className="SearchedPokeImg">
    //                     {/* <GrabTheImage Pokemon={bestPokemon} /> */}
    //                 </div>
    //                 <div className="SearchedPokeInfo Info_ul">
    //                     <div className="button">
    //                         <button type="submit">Edit</button>
    //                     </div>
    //                     <ul>
    //                         <li>Nintendo Name: </li>
    //                         <li>Friend Code: </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //             {/* <BattleTeam UserId={UserId} /> */}
    //             <div className="Favorites">
    //                 <h2>My Favorites</h2>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // );
}

export default UserMyPage;

/*

{loading ? (
    <p>Loading...</p>
) :                 }



{loading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>Error: {error.message}</p>
        ) : (
            <div className="Users">
                <select>{userNames}</select>
            </div>
        )}

*/

/*

<form onSubmit={handleSubmit}>
                            <label htmlFor="dropdown">Select an option:</label>
                            <select
                                id="dropdown"
                                name="dropdown"
                                value={selectedOption}
                                onChange={handleOptionChange}
                            >
                                {userNames}
                            </select>
                            <br />
                            <input type="submit" value="Submit" />
                        </form>

*/
