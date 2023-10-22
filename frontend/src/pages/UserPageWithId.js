import "../Add-Style/UserPageWithId.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GrabTheImage from "../pageInserts/GrabTheImage";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function UserPageWithId() {
    const history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [team, setTeam] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { auth, username, userID } = useAuth();

    // Ensure userID is a number, default to null if not
    const x = parseInt(userID);
    const y = isNaN(x) ? null : x;

    useEffect(() => {
        async function fetchData() {
            const userResponse = await fetch(
                `http://localhost:4000/users/${id}`
            );
            const userJSON = await userResponse.json();
            setUser(userJSON);

            const teamResponse = await fetch(
                `http://localhost:4000/battleteams/${id}`
            );
            if (!teamResponse) {
                setTeam(null);
            } else {
                const teamJSON = await teamResponse.json();
                setTeam(teamJSON);
            }

            const favoritesResponse = await fetch(
                `http://localhost:4000/favorites/${id}`
            );
            if (!favoritesResponse) {
                setFavorites(null);
            } else {
                const favoritesJSON = await favoritesResponse.json();
                setFavorites(favoritesJSON);
            }

            // Simulate a delay of 2 seconds.
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }

        fetchData();
    }, [id]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!user) {
        return <p>Data not available.</p>;
    }

    const username2 = user[0].username;
    const { email, bestpokemon } = user[0];
    const { slot_1, slot_2, slot_3, slot_4, slot_5, slot_6 } = team[0];

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!user) {
        return <p>Data not available.</p>;
    }

    let theUserButton;
    let theBattleButton;
    let theFavButton;
    
    if (auth) {
        if (username === username2) {
            theUserButton = (
                <>
                    <button
                        onClick={() => {
                            history.push(`/edituser`);
                        }}
                    >
                        Edit
                    </button>
                </>
            );
            theBattleButton = (
                <>
                    <button
                        onClick={() => {
                            history.push(`/editbattleteam`);
                        }}
                    >
                        Edit
                    </button>
                </>
            );
            theFavButton = (
                <>
                    <button
                        onClick={() => {
                            history.push(`/editfavorites`);
                        }}
                    >
                        Edit
                    </button>
                </>
            );
        } else {
            theUserButton = <></>;
            theBattleButton = <></>;
            theFavButton = <></>;
        }
    } else {
        theUserButton = <></>;
        theBattleButton = <></>;
        theFavButton = <></>;
    }

    let listOfPokemon;
    let battleList;

    if (favorites === null) {
        listOfPokemon = <div>No favs...</div>;
    } else {
        listOfPokemon = favorites.map((each) => (
            <div key={each.favorite_id}>
                <Link to={`/pokemonpage/${each.pokemon}`}>
                    <h4 className="shrink-text">{each.pokemon}</h4>
                    {each.pokemon ? (
                        <GrabTheImage Pokemon={each.pokemon} Shiny={each.shiny}/>
                    ) : (
                        <img
                            className="Pokeball"
                            src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                            alt="Default Pokeball Image"
                        />
                    )}
                </Link>
            </div>
        ));
    }

   
    
    const favShinySlot1 = favorites.filter(
        (favorite) => favorite.pokemon === slot_1
    );
    
    console.log(favShinySlot1[0].shiny)

    const favShinySlot2 = favorites.filter(
        (favorite) => favorite.pokemon === slot_2
    );
    const favShinySlot3 = favorites.filter(
        (favorite) => favorite.pokemon === slot_3
    );
    const favShinySlot4 = favorites.filter(
        (favorite) => favorite.pokemon === slot_4
    );
    const favShinySlot5 = favorites.filter(
        (favorite) => favorite.pokemon === slot_5
    );
    const favShinySlot6 = favorites.filter(
        (favorite) => favorite.pokemon === slot_6
    );
    
    const bestShiny = favorites.filter(
        (favorite) => favorite.pokemon === bestpokemon
    );
    

    if (team === null) {
        battleList = <div>No team...</div>;
    } else {
        battleList = (
            <>
                {slot_1 ? (
                    <div>
                        <h4>{slot_1}</h4>
                        <Link to={`/pokemonpage/${slot_1}`}>
                            <GrabTheImage Pokemon={slot_1} Shiny={favShinySlot1[0].shiny}/>
                        </Link>
                    </div>
                ) : (
                    <div className="AltDiv">
                        <img
                            className="AltImg"
                            src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                        />
                    </div>
                )}

                {slot_2 ? (
                    <div>
                        <h4>{slot_2}</h4>
                        <Link to={`/pokemonpage/${slot_2}`}>
                            <GrabTheImage Pokemon={slot_2} Shiny={favShinySlot2[0].shiny}/>
                        </Link>
                    </div>
                ) : (
                    <div className="AltDiv">
                        <img
                            className="AltImg"
                            src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                        />
                    </div>
                )}

                {slot_3 ? (
                    <div>
                        <h4>{slot_3}</h4>
                        <Link to={`/pokemonpage/${slot_3}`}>
                            <GrabTheImage Pokemon={slot_3} Shiny={favShinySlot3[0].shiny}/>
                        </Link>
                    </div>
                ) : (
                    <div className="AltDiv">
                        <img
                            className="AltImg"
                            src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                        />
                    </div>
                )}

                {slot_4 ? (
                    <div>
                        <h4>{slot_4}</h4>
                        <Link to={`/pokemonpage/${slot_4}`}>
                            <GrabTheImage Pokemon={slot_4} Shiny={favShinySlot4[0].shiny}/>
                        </Link>
                    </div>
                ) : (
                    <div className="AltDiv">
                        <img
                            className="AltImg"
                            src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                        />
                    </div>
                )}

                {slot_5 ? (
                    <div>
                        <h4>{slot_5}</h4>
                        <Link to={`/pokemonpage/${slot_5}`}>
                            <GrabTheImage Pokemon={slot_5} Shiny={favShinySlot5[0].shiny}/>
                        </Link>
                    </div>
                ) : (
                    <div className="AltDiv">
                        <img
                            className="AltImg"
                            src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                        />
                    </div>
                )}

                {slot_6 ? (
                    <div>
                        <h4>{slot_6}</h4>
                        <Link to={`/pokemonpage/${slot_6}`}>
                            <GrabTheImage Pokemon={slot_6} Shiny={favShinySlot6[0].shiny}/>
                        </Link>
                    </div>
                ) : (
                    <div className="AltDiv">
                        <img
                            className="AltImg"
                            src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                        />
                    </div>
                )}
            </>
        );
    }

    return (
        <div className="CenterIt">
            <h1>
                {username2} {theUserButton}
            </h1>
            <div className="UserDetails">
                {bestpokemon ? (
                    <div className="SearchedPokeImg">
                        <Link to={`/pokemonpage/${bestpokemon}`}>
                            <GrabTheImage Pokemon={bestpokemon} Shiny={bestShiny[0].shiny}/>
                        </Link>
                    </div>
                ) : (
                    <div className="SearchedPokeImg">
                        <img
                            className="SearchedPokeImg"
                            src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                        />
                    </div>
                )}
                <div className="SearchedPokeInfo Info_ul">
                    <ul>
                        <li>Pokemon Trainer: {username}</li>
                        <li>Email: {email}</li>
                        <li>My favorite pokemon is: {bestpokemon}</li>
                    </ul>
                </div>
            </div>

            <div className="BattleTeams">
                <h2>Battle Team {theBattleButton}</h2>
                {battleList}
            </div>

            <div className="Favorites">
                <h2>My Favorites {theFavButton}</h2>
                {listOfPokemon}
            </div>
        </div>
    );
}

export default UserPageWithId;


