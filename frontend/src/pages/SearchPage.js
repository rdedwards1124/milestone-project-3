import "../Add-Style/SearchPage.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AllTypes from "../pageInserts/AllTypes";

function SearchPage() {
    const [searchValue, setSearchValue] = useState("");
    const [searchedPokemon, setSearchedPokemon] = useState({});
    const [text, setText] = useState("");

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

    let name = "pikachu"
    name = searchedPokemon.name || "Loading...";
    const imgSrc =
        searchedPokemon.sprites &&
        searchedPokemon.sprites.other &&
        searchedPokemon.sprites.other["official-artwork"] &&
        searchedPokemon.sprites.other["official-artwork"].front_default
            ? searchedPokemon.sprites.other["official-artwork"].front_default
            : "https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg";

    const type1 =
        searchedPokemon.types &&
        searchedPokemon.types[0] &&
        searchedPokemon.types[0].type &&
        searchedPokemon.types[0].type.name;

    const type2 =
        searchedPokemon.types &&
        searchedPokemon.types[1] &&
        searchedPokemon.types[1].type &&
        searchedPokemon.types[1].type.name
            ? searchedPokemon.types[1].type.name
            : null;

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className="CenterIt">
                <div className="Searchbox">
                    <h1>Choose Your Pokémon!!</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Search..."
                            onChange={handleChange}
                            value={searchValue}
                        />
                        <button type="submit">I Choose You!!</button>
                    </form>
                </div>
                <div className="SearchedPoke">
                    <div className="SearchedPokeImg">
                        <img width="90%" src={imgSrc} alt="pokemon image"></img>
                    </div>
                    <div className="SearchedPokeInfo SPI_Padding">
                        <h2>{name}</h2>
                        <ul>
                            <li>Type1: {type1}</li>
                            <li>Type2: {type2}</li>
                        </ul>
                        <div className="buttons">
                            <Link to={`/pokemonpage/${name}`} >
                                <button type="submit">More Info</button>
                            </Link>
                        </div>
                        {text}
                    </div>
                </div>
                <div className="SearchByType">
                    <h2>Search By Type</h2>
                    <AllTypes />
                </div>
            </div>
        </>
    );
}

export default SearchPage;

