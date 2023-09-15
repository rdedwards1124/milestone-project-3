import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AllTypes from "./AllTypes";

function SearchType (){
    const { id } = useParams();
    const [typeData, setTypeData] = useState({})

    const getTypeInfo = async (ID) => {
        const url = `https://pokeapi.co/api/v2/type/${ID}/`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setTypeData(responseJSON);
        }
    };

    useEffect(() => {
        getTypeInfo(id);
    }, [id]);

    return(
        <>
            <div className="CenterIt">
                <h2>{typeData.name} Type Pokemon!</h2>
            </div>
            <div>
                List of all the pokemon!
            </div>
            <div>
                <AllTypes/>
            </div>
            
            
        </>
    )
}

export default SearchType