import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GrabTheImage from "../pageInserts/GrabTheImage";
// import GrabTheImage2 from "../pageInserts/GrabTheImage2";
import BattleTeam from "../pageInserts/BattleTeam"

function UserPageWithId() {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    const [team, setTeam] = useState([]);

    const getBattleTeam = async (ID) => {
        const url = `http://localhost:4000/battleteams/${ID}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setTeam(responseJSON);
        }
    };

    const getTrainer = async (Id) => {
        const url = `http://localhost:4000/users/${Id}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setUser(responseJSON);
        }
        // console.log(UserId) 
    };

    useEffect(() => {
        getTrainer(id);
    }, [id]);

    useEffect(() => {
        getBattleTeam(id);
    }, [id]);



    const UserId = user && user[0] && user[0].id;

    const UserName = user && user[0] && user[0].username;

    const bestPokemon = user[0] && user[0].bestpokemon;

    // const TeamId =
    //     team && team[0] && team[0].id ? team && team[0] && team[0].id : null;

    // const slot1 = team && team[0] && team[0].slot_1;
    // console.log(slot1)

    // const slot2 =
    //     team && team[0] && team[0].slot_2
    //         ? team && team[0] && team[0].slot_2
    //         : null;
    // const slot3 =
    //     team && team[0] && team[0].slot_3
    //         ? team && team[0] && team[0].slot_3
    //         : null;
    // const slot4 =
    //     team && team[0] && team[0].slot_4
    //         ? team && team[0] && team[0].slot_4
    //         : null;
    // const slot5 =
    //     team && team[0] && team[0].slot_5
    //         ? team && team[0] && team[0].slot_5
    //         : null;
    // const slot6 =
    //     team && team[0] && team[0].slot_6
    //         ? team && team[0] && team[0].slot_6
    //         : null;

    return (
        <>
            <div className="CenterIt">
                <h1>{UserName}</h1>
                <div className="UserDetails">
                    <div className="SearchedPokeImg">
                        <GrabTheImage Pokemon={bestPokemon} />
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
                    <BattleTeam UserId={UserId} />
                </div>

                <div className="Favorites">
                    <h2>My Favorites</h2>
                </div>
            </div>
        </>
    );
}

export default UserPageWithId;

/*

<div>
                        <h3>Pokemon</h3>
                        <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
                    </div>
                    <div>
                        <h3>Pokemon</h3>
                        <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
                    </div>
                    <div>
                        <h3>Pokemon</h3>
                        <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
                    </div>
                    <div>
                        <h3>Pokemon</h3>
                        <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
                    </div>
                    <div>
                        <h3>Pokemon</h3>
                        <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
                    </div>
                    <div>
                        <h3>Pokemon</h3>
                        <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
                    </div>
                    <div>
                        <h3>Pokemon</h3>
                        <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
                    </div>
                    <div>
                        <h3>Pokemon</h3>
                        <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
                    </div>
                    <div>
                        <h3>Pokemon</h3>
                        <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
                    </div>
                    <div>
                        <h3>Pokemon</h3>
                        <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
                    </div>
                    <div>
                        <h3>Pokemon</h3>
                        <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
                    </div>
                    <div>
                        <h3>Pokemon</h3>
                        <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
                    </div>

*/

/*

                    <div>
                        <h4>{UserId}</h4>
                        <GrabTheImage2 Pokemon={slot1} />
                    </div>
                    <div>
                        <h4>{slot2}</h4>
                        <GrabTheImage Pokemon={slot2} />
                    </div>
                    <div>
                        <h4>{slot3}</h4>
                        <GrabTheImage Pokemon={slot3} />
                    </div>
                    <div>
                        <h4>{slot4}</h4>
                        <GrabTheImage Pokemon={slot4} />
                    </div>
                    <div>
                        <h4>{slot5}</h4>
                        <GrabTheImage Pokemon={slot5} />
                    </div>
                    <div>
                        <h4>{slot6}</h4>
                        <GrabTheImage Pokemon={slot6} />
                    </div>

*/