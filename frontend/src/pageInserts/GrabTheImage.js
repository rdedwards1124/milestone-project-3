import React from "react";
import { useState, useEffect } from "react";

function GrabTheImage(props) {
    const [searchedPokemon, setSearchedPokemon] = useState({});

    const getPokemon = async (apples) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${apples}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setSearchedPokemon(responseJSON);
        }
    };

    useEffect(() => {
        getPokemon(props.Pokemon);
    }, [props.Pokemon]);

    const imgSrc =
        searchedPokemon.sprites &&
        searchedPokemon.sprites.other &&
        searchedPokemon.sprites.other["official-artwork"] &&
        searchedPokemon.sprites.other["official-artwork"].front_default
            ? searchedPokemon.sprites.other["official-artwork"].front_default
            : null;

    return (
        <>
            <img width="90%" src={imgSrc}></img>
        </>
    );
}

export default GrabTheImage;
