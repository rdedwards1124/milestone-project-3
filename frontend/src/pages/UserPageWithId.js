import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserPageWithId (){
    const { id } = useParams();
    const [user, setUser] = useState([])

    const getTrainer = async (ID) => {
        const url = `http://localhost:4000/users/${ID}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setUser(responseJSON);
        }
    };

    useEffect(() => {
        getTrainer(id);
    }, [id]);

    return(
        <>
                <div className="CenterIt">
                    <h1>USERNAME</h1>
                    <div className="UserDetails">
                        <div className="SearchedPokeImg">
                            <img
                                width="90%"
                                src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                            ></img>
                        </div>
                        <div className="SearchedPokeInfo Info_ul">
                            <div className="button">
                                <button type="submit">Edit</button>
                            </div>
                            <ul>
                                <li>Nintendo Name: </li>
                                <li>Friend Code: </li>
                            </ul>
                        </div>
                    </div>
                    <div className="BattleTeams">
                        <h2>Battle Team</h2>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                    </div>
                    <div className="Favorites">
                        <h2>My Favorites</h2>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                        <div>
                            <h3>Pokemon</h3>
                            <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"></img>
                        </div>
                    </div>
                </div>
            </>
    )
}


export default UserPageWithId