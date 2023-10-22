import "../Add-Style/EditPages.css";
import React from "react";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function EditUser() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState("");
    const [users, setUsers] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const { auth, userID, username } = useAuth();

    // Ensure userID is a number, default to null if not
    const x = parseInt(userID);
    const y = isNaN(x) ? null : x;

    const getUsers = async () => {
        const url = `http://localhost:4000/users/`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setUsers(responseJSON);
        }
    };

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
        const delay = 2000; // Adjust this to your desired loading time (in milliseconds)
        setTimeout(() => {
            setIsLoading(false); // After the delay, set isLoading to false
        }, delay);

        // Fetch comments after the loading delay
        getUsers();
        getFavorites();
    }, []);

    
    // Filterd info
    const theList = favorites.filter((fav) => fav.user_id === y);
    let favlist;
    favlist = theList.map((each) => (
        <>
            <option key={each.favorite_id} value={each.pokemon}>{each.pokemon}</option>
        </>
    ));

    let infoToUpdate = {
        bestpokemon: selectedOption
    };

    const handleOptionChange = async (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle the submission logic here
        await fetch(`http://localhost:4000/users/${y}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(infoToUpdate),
        });
        history.push(`/userpage/${y}`)
    };

    // Authorization
    let display;
    if (auth) {
        display = (
            <>
                <div>
                    <div className="top topDiv" >
                        <h1>Edit My Info</h1>
                    </div>
                    <div className="middle bottomDiv" >
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="dropdown">
                                Choose you Favorite Pokemon!
                            </label>
                            <select
                                id="dropdown"
                                name="dropdown"
                                value={selectedOption}
                                onChange={handleOptionChange}
                            >
                                <option value=" ">Select from favorites</option>
                                {favlist}
                            </select>
                            <input type="submit" value="Submit" />
                        </form>
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

    // Show a loading screen until isLoading becomes false
    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return <>{display}</>;
}
