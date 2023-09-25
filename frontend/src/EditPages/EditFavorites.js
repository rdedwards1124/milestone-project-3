import "../Add-Style/EditPages.css";
import React from "react";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import GrabTheImage from "../pageInserts/GrabTheImage";

export default function EditFavorites() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const { auth, userID } = useAuth();

    // Ensure userID is a number, default to null if not
    const x = parseInt(userID);
    const y = isNaN(x) ? null : x;

    const getFavorites = async () => {
        const url = `http://localhost:4000/favorites/`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setFavorites(responseJSON);
        }
    };

    useEffect(() => {
        // Simulate a loading delay with setTimeout
        const delay = 3000; // Adjust this to your desired loading time (in milliseconds)
        setTimeout(() => {
            setIsLoading(false); // After the delay, set isLoading to false
        }, delay);

        // Fetch comments after the loading delay
        getFavorites();
    }, []);

    const handleSubmit = async (e, z) => {
        e.preventDefault();

        try {
            await fetch(`http://localhost:4000/favorites/${z}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Reload the page after the DELETE request is successful
            window.location.reload();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    const theList = favorites.filter((fav) => fav.user_id === y);

    let listOfPokemon;

    if (favorites === null) {
        listOfPokemon = <div>No favs...</div>;
    } else {
        listOfPokemon = theList.map((each) => (
            <div className="EachImage" key={each.favorite_id}>
                <h4 className="">{each.pokemon}</h4>
                {each.pokemon ? (
                    <GrabTheImage Pokemon={each.pokemon} />
                ) : (
                    <img
                        className="Pokeball"
                        src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                        alt="Default Pokeball Image"
                    />
                )}
                <button
                    onClick={(e) => {
                        handleSubmit(e, each.favorite_id);
                    }}
                >
                    DELETE
                </button>
            </div>
        ));
    }

    let display;
    if (auth) {
        display = (
            <>
                <div>
                    <div className="top topDiv" >
                        <h1>Delete Favorites</h1>
                    </div>
                    <div className="middle bottomDiv" >
                        <div className="Images">{listOfPokemon}</div>
                    </div>
                    <div className="bottom bottomDiv" >
                        <h3>Finished?</h3>
                        <div>
                            <button
                                onClick={() => {
                                    history.push(`/userpage/${y}`);
                                }}
                            >
                                Go back to My Page
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        display = (
            <>
                <div>
                    <div className="CenterIt">
                        <h1>
                            Sorry... You must be logged in to access this page!
                        </h1>
                    </div>
                    <div>
                        <img
                            src="https://www.media.pokekalos.fr/img/site/erreur404.png"
                            alt="Error 404"
                        />
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

    if (isLoading) {
        // Show a loading screen until isLoading becomes false
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return <>{display}</>;
}

