import "../Add-Style/PokemonPage.css";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AllTypes from "../pageInserts/AllTypes";

function PokemonPage() {
    const { id } = useParams();
    const [searchedPokemon, setSearchedPokemon] = useState({});
    const [text, setText] = useState("");

    const getPokemon = async (ID) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${ID}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setSearchedPokemon(responseJSON);
        }
    };

    useEffect(() => {
        getPokemon(id);
    }, [id]);

    const name = searchedPokemon.name || "Loading...";
    const imgSrc =
        searchedPokemon.sprites &&
        searchedPokemon.sprites.other &&
        searchedPokemon.sprites.other["official-artwork"] &&
        searchedPokemon.sprites.other["official-artwork"].front_default;

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

    let ability1 = null;
    let ability2 = null;
    let hidden = null;

    if (searchedPokemon.abilities && searchedPokemon.abilities.length >= 1) {
        ability1 = searchedPokemon.abilities[0].ability.name;

        if (searchedPokemon.abilities.length >= 2) {
            hidden = searchedPokemon.abilities[1].ability.name;

            if (searchedPokemon.abilities.length >= 3) {
                ability2 = searchedPokemon.abilities[1].ability.name;
                hidden = searchedPokemon.abilities[2].ability.name;
            }
        }
    }

    const hp =
        searchedPokemon.stats &&
        searchedPokemon.stats[0] &&
        searchedPokemon.stats[0].base_stat;

    const attack =
        searchedPokemon.stats &&
        searchedPokemon.stats[1] &&
        searchedPokemon.stats[1].base_stat;

    const defense =
        searchedPokemon.stats &&
        searchedPokemon.stats[2] &&
        searchedPokemon.stats[2].base_stat;

    const sp_atk =
        searchedPokemon.stats &&
        searchedPokemon.stats[3] &&
        searchedPokemon.stats[3].base_stat;

    const sp_def =
        searchedPokemon.stats &&
        searchedPokemon.stats[4] &&
        searchedPokemon.stats[4].base_stat;

    const speed =
        searchedPokemon.stats &&
        searchedPokemon.stats[5] &&
        searchedPokemon.stats[5].base_stat;

    const handleClickAdd = (e) => {
        e.preventDefault();
        setText("Added to Favorites!!");
    };

    const handleClickRemove = (e) => {
        e.preventDefault();
        setText("Removed from Favorites..");
    };

    return (
        <div>
            <div className="PageTitle">
                <h1>{name}</h1>
            </div>
            <div className="SearchedPoke">
                <div className="SearchedPokeImg">
                    <img width="90%" src={imgSrc} alt="pokemon image"></img>
                </div>
                <div className="SearchedPokeInfo SPI_div">
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
                        <button onClick={handleClickAdd}>
                            Add to Favorites
                        </button>
                        <button onClick={handleClickRemove}>
                            Remove from Favorites
                        </button>
                        <Link to={`/searchpage`}>
                            <button type="submit">Search Page</button>
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
    );
}

export default PokemonPage;

// const ability1 =
//     searchedPokemon.abilities &&
//     searchedPokemon.abilities[0] &&
//     searchedPokemon.abilities[0].ability &&
//     searchedPokemon.abilities[0].ability.name;

// const ability2 =
//     searchedPokemon.abilities &&
//     searchedPokemon.abilities[1] &&
//     searchedPokemon.abilities[1].ability &&
//     searchedPokemon.abilities[1].ability.name;

// const hidden =
//     searchedPokemon.abilities &&
//     searchedPokemon.abilities[2] &&
//     searchedPokemon.abilities[2].ability &&
//     searchedPokemon.abilities[2].ability.name;
