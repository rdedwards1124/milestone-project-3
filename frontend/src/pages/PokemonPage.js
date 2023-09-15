import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PokemonPage() {
    const { id } = useParams();
    const [searchedPokemon, setSearchedPokemon] = useState({});

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
        searchedPokemon.sprites.other.dream_world &&
        searchedPokemon.sprites.other.dream_world.front_default;

    return (
        <div>
            <div className="PageTitle">
                <h1>{name}</h1>
            </div>
            <div className="SearchedPoke">
                <div className="SearchedPokeImg">
                    <img width="90%" src={imgSrc} alt="pokemon image"></img>
                </div>
                <div className="SearchedPokeInfo">
                    <h2></h2>
                    <ul>
                        <li>Type1: </li>
                        <li>Type2: </li>
                        <li>Ability1:</li>
                        <li>Ability2: </li>
                        <li>Hidden Ability: </li>
                        <li>
                            Base Stats
                            <ul>
                                <li>HP:</li>
                                <li>Attack:</li>
                                <li>Defense: </li>
                                <li>Special Atk: </li>
                                <li>Special Def: </li>
                                <li>Speed: </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="buttons">
                        <button type="submit">Add to Favorites</button>
                        <button type="submit">More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonPage;
