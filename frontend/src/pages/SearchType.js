import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TheTypeList from "../pageInserts/TheTypeList";
import AllTypes from "../pageInserts/AllTypes";
import "../Add-Style/SearchType.css";

function SearchType() {
    const { id } = useParams();
    const [typeData, setTypeData] = useState({});
    const [searchValue, setSearchValue] = useState("");
    const [searchedPokemon, setSearchedPokemon] = useState({});

    const getTypeInfo = async (ID) => {
        const url = `https://pokeapi.co/api/v2/type/${ID}/`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setTypeData(responseJSON);
        }
    };

    // const getPokemon = async (searchValue) => {
    //     const url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;
    //     const response = await fetch(url);
    //     const responseJSON = await response.json();
    //     if (responseJSON) {
    //         setSearchedPokemon(responseJSON);
    //     }
    // };

    useEffect(() => {
        getTypeInfo(id);
        // getPokemon(searchValue);
    }, [id]);

    let names = typeData.pokemon
        ? typeData.pokemon.map((pokemon) => pokemon.pokemon.name)
        : [];

    return (
        <>
            <div className="PageTitle">
                <h1>{typeData.name} Type Pokemon!</h1>
            </div>
            <div className="PokemonList">
                <div className="EachPokemonDiv">
                    <ul>
                        {names.map((name, index) => (
                            <div className="EachPokemonName">
                                <Link to={`/pokemonpage/${name}`}>
                                    <li key={index}>{name}</li>
                                </Link>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="TheTypes">
                <AllTypes />
            </div>
        </>
    );
}

export default SearchType;

/*

typeData.Pokemon.forEach((item) => {
  const { name, url } = item.pokemon;
  console.log(`Name: ${name}, URL: ${url}`);
});





for (let index = 0; index < typeData.Pokemon.length; index++) {
    const element = typeData.Pokemon[index].pokemon.name;
    return element
}

*/
