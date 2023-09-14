import "../Add-Style/SearchPage.css";

import React, { useState, useEffect } from "react";

import electric from "../Other/electric.png";
import water from "../Other/water.png";
import fire from "../Other/fire.png";
import grass from "../Other/grass.png";
import ice from "../Other/ice.png";
import rock from "../Other/rock.png";
import ground from "../Other/ground.png";
import steel from "../Other/steel.png";
import poison from "../Other/poison.png";
import fairy from "../Other/fairy.png";
import dark from "../Other/dark.png";
import psychic from "../Other/psychic.png";
import fighting from "../Other/fighting.png";
import flying from "../Other/flying.png";
import bug from "../Other/bug.png";
import ghost from "../Other/ghost.png";
import normal from "../Other/normal.png";
import dragon from "../Other/dragon.png";

function SearchPage() {
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
                        />
                        <button type="submit">I Choose You!!</button>
                    </form>
                </div>
                <div className="SearchedPoke">
                    <div className="SearchedPokeImg">
                        <img
                            width="90%"
                            src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                        ></img>
                    </div>
                    <div className="SearchedPokeInfo">
                        <h2>Pokemon Name</h2>
                        <ul>
                            <li>Type: </li>
                            <li>Ability: </li>
                            <li>Hidden Ability: </li>
                            <li>Base Stats 
                                <ul>
                                    <li>HP:</li>
                                    <li>Attack:</li>
                                    <li>Defense:</li>
                                    <li>Special Atk:</li>
                                    <li>Special Def:</li>
                                    <li>Speed:</li>
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
                    <div className="types">
                        <div>
                            {/* <!-- <h2>Electric</h2> --> */}
                            <a href="">
                                <img src={electric} alt="electric symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Water</h2> --> */}
                            <a href="">
                                <img src={water} alt="water symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Fire</h2> --> */}
                            <a href="">
                                <img src={fire} alt="fire symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Grass</h2> --> */}
                            <a href="">
                                <img src={grass} alt="grass symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Ice</h2> --> */}
                            <a href="">
                                <img src={ice} alt="ice symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Rock</h2> --> */}
                            <a href="">
                                <img src={rock} alt="rock symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Ground</h2> --> */}
                            <a href="">
                                <img src={ground} alt="ground symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Steel</h2> --> */}
                            <a href="">
                                <img src={steel} alt="steel symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Poison</h2> --> */}
                            <a href="">
                                <img src={poison} alt="poison symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Fairy</h2> --> */}
                            <a href="">
                                <img src={fairy} alt="fairy symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Dark</h2> --> */}
                            <a href="">
                                <img src={dark} alt="dark symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Psychic</h2> --> */}
                            <a href="">
                                <img src={psychic} alt="psychic symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Fighting</h2> --> */}
                            <a href="">
                                <img src={fighting} alt="fighting symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Flying</h2> --> */}
                            <a href="">
                                <img src={flying} alt="flying symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Bug</h2> --> */}
                            <a href="">
                                <img src={bug} alt="bug symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Ghost</h2> --> */}
                            <a href="">
                                <img src={ghost} alt="ghost symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Normal</h2> --> */}
                            <a href="">
                                <img src={normal} alt="normal symbol" />
                            </a>
                        </div>
                        <div>
                            {/* <!-- <h2>Dragon</h2> --> */}
                            <a href="">
                                <img src={dragon} alt="dragon symbol" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchPage;
