import "../Add-Style/SearchPage.css";

import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import AllTypes from "./AllTypes";

function SearchPage() {
    const [searchValue, setSearchValue] = useState("");
    const [searchedPokemon, setSearchedPokemon] = useState({});

    const getPokemon = async (searchValue) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setSearchedPokemon(responseJSON);
        }
    };

    useEffect(() => {
        getPokemon(searchValue);
    }, [searchValue]);

    // const pokename = "Pokemon";
    const type1 = "type1";
    const type2 = "type2";
    const ability1 = "ability 1";
    const ability2 = "ability 2";
    const hidden = "hidden ability";
    const hp = "000";
    const attack = "000";
    const defense = "000";
    const sp_atk = "000";
    const sp_def = "000";
    const speed = "000";

    const pokename = searchedPokemon.name;
    // const type1 = searchedPokemon.types[0].type.name
    // const type2 = searchedPokemon.types[1].type.name
    // const ability1 = searchedPokemon.abilities[0].ability.name
    // const ability2 = searchedPokemon.abilities[1].ability.name
    // const hidden = searchedPokemon.abilities[2].ability.name
    // const hp = searchedPokemon.stats[0].base_stat
    // const attack = searchedPokemon.stats[1].base_stat
    // const defense = searchedPokemon.stats[2].base_stat
    // const sp_atk = searchedPokemon.stats[3].base_stat
    // const sp_def = searchedPokemon.stats[4].base_stat
    // const speed = searchedPokemon.stats[5].base_stat

    let theValue;

    const handleChange = (event) => {
        theValue = event.target.value;
        return theValue;
    };

    const handleClick = () => {
        setSearchValue(theValue);
    };

    return (
        <>
            <div className="CenterIt">
                <div className="Searchbox">
                    <h1>Choose Your Pokémon!!</h1>
                    <form>
                        <input
                            type="text"
                            name="search"
                            placeholder="Search..."
                            onChange={handleChange}
                            // value={searchValue}
                        />
                        <button onClick={handleClick}>I Choose You!!</button>
                    </form>
                </div>
                <div className="SearchedPoke">
                    <div className="SearchedPokeImg">
                        <img
                            width="90%"
                            src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                            // src={searchedPokemon.sprites.other.home.front_default}
                            alt="pokemon image"
                        ></img>
                    </div>
                    <div className="SearchedPokeInfo">
                        <h2>{pokename}</h2>
                        <ul>
                            <li>Type1: {type1}</li>
                            <li>Type2: {type2}</li>
                            <li>Ability1: {ability1}</li>
                            <li>Ability2: {ability2}</li>
                            <li>Hidden Ability: {hidden}</li>
                            <li>
                                Base Stats
                                <ul>
                                    <li>HP: {hp}</li>
                                    <li>Attack: {attack}</li>
                                    <li>Defense: {defense}</li>
                                    <li>Special Atk: {sp_atk}</li>
                                    <li>Special Def: {sp_def}</li>
                                    <li>Speed: {speed}</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="buttons">
                            <button type="submit">Add to Favorites</button>
                            <button type="submit">More Info</button>
                        </div>
                    </div>
                </div>
                <div className="SearchByType">
                    <h2>Search By Type</h2>
                    <AllTypes/>
                </div>
            </div>
        </>
    );
}

export default SearchPage;
