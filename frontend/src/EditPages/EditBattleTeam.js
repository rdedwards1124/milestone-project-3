import "../Add-Style/EditPages.css";
import React from "react";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function EditBattleTeam() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [selectedOption3, setSelectedOption3] = useState("");
    const [selectedOption4, setSelectedOption4] = useState("");
    const [selectedOption5, setSelectedOption5] = useState("");
    const [selectedOption6, setSelectedOption6] = useState("");
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
        const delay = 1000; // Adjust this to your desired loading time (in milliseconds)
        setTimeout(() => {
            setIsLoading(false); // After the delay, set isLoading to false
        }, delay);

        // Fetch comments after the loading delay
        getFavorites();
    }, []);

    const theList = favorites.filter((fav) => fav.user_id === y);
    // const defaultPokemon = theList && theList[0] && theList[0].pokemon
    // console.log(defaultPokemon)
    // {defaultPokemon}
    let favlist;
    favlist = theList.map((each) => (
        <>
            <option key={each.favorite_id} value={each.pokemon}>
                {each.pokemon}
            </option>
        </>
    ));

    let infoToUpdate = {
        slot_1: selectedOption1,
        slot_2: selectedOption2,
        slot_3: selectedOption3,
        slot_4: selectedOption4,
        slot_5: selectedOption5,
        slot_6: selectedOption6,
    };

    const handleOptionChange1 = async (e) => {
        setSelectedOption1(e.target.value);
    };
    const handleOptionChange2 = async (e) => {
        setSelectedOption2(e.target.value);
    };
    const handleOptionChange3 = async (e) => {
        setSelectedOption3(e.target.value);
    };
    const handleOptionChange4 = async (e) => {
        setSelectedOption4(e.target.value);
    };
    const handleOptionChange5 = async (e) => {
        setSelectedOption5(e.target.value);
    };
    const handleOptionChange6 = async (e) => {
        setSelectedOption6(e.target.value);
    };

    console.log(selectedOption1)

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle the submission logic here
        
        if (selectedOption1===" " || selectedOption2===" " || selectedOption3===" " || selectedOption4===" " || selectedOption5===" " || selectedOption6===" "){
            console.log("need to select pokemon first!!")
        } else {
            
            await fetch(`http://localhost:4000/battleteams/${y}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(infoToUpdate),
            });
            history.push(`/userpage/${y}`);
        }
        
        // await fetch(`http://localhost:4000/battleteams/${y}`, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(infoToUpdate),
        // });
        // history.push(`/userpage/${y}`);
    };

    const isFormValid = () => {
        return (
            selectedOption1 !== "" &&
            selectedOption2 !== "" &&
            selectedOption3 !== "" &&
            selectedOption4 !== "" &&
            selectedOption5 !== "" &&
            selectedOption6 !== ""
        );
    };

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
                            <div>
                                <label htmlFor="dropdown1">
                                    Choose 1st Pokemon!
                                </label>
                                <select
                                    id="dropdown1"
                                    name="dropdown1"
                                    value={selectedOption1}
                                    onChange={handleOptionChange1}
                                >
                                    <option value="">Select from favorites</option>
                                    {favlist}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="dropdown2">
                                    Choose 2nd Pokemon!
                                </label>
                                <select
                                    id="dropdown2"
                                    name="dropdown2"
                                    value={selectedOption2}
                                    onChange={handleOptionChange2}
                                >
                                    <option value="">Select from favorites</option>
                                    {favlist}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="dropdown3">
                                    Choose 3rd Pokemon!
                                </label>
                                <select
                                    id="dropdown3"
                                    name="dropdown3"
                                    value={selectedOption3}
                                    onChange={handleOptionChange3}
                                >
                                    <option value="">Select from favorites</option>
                                    {favlist}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="dropdown4">
                                    Choose 4th Pokemon!
                                </label>
                                <select
                                    id="dropdown4"
                                    name="dropdown4"
                                    value={selectedOption4}
                                    onChange={handleOptionChange4}
                                >
                                    <option value="">Select from favorites</option>
                                    {favlist}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="dropdown5">
                                    Choose 5th Pokemon!
                                </label>
                                <select
                                    id="dropdown5"
                                    name="dropdown5"
                                    value={selectedOption5}
                                    onChange={handleOptionChange5}
                                >
                                    <option value="">Select from favorites</option>
                                    {favlist}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="dropdown6">
                                    Choose 6th Pokemon!
                                </label>
                                <select
                                    id="dropdown6"
                                    name="dropdown6"
                                    value={selectedOption6}
                                    onChange={handleOptionChange6}
                                >
                                    <option value="">Select from favorites</option>
                                    {favlist}
                                </select>
                            </div>
                            <input type="submit" value="Submit" disabled={!isFormValid()} />
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
