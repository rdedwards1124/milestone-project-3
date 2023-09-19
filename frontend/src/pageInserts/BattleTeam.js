
import React from "react";
import { useState, useEffect } from "react";
import GrabTheImage from "./GrabTheImage";

function BattleTeam(props) {
    const [team, setTeam] = useState([]);

    const getBattleTeam = async (ID) => {
        const url = `http://localhost:4000/battleteams/${ID}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setTeam(responseJSON);
        }
    };

    useEffect(() => {
        getBattleTeam(props.UserId);
    }, [props.UserId]);

    const TeamId =
        team && team[0] && team[0].id ? team && team[0] && team[0].id : null;

    const slot1 =
        team && team[0] && team[0].slot_1
            ? team && team[0] && team[0].slot_1
            : null;
    const slot2 =
        team && team[0] && team[0].slot_2
            ? team && team[0] && team[0].slot_2
            : null;
    const slot3 =
        team && team[0] && team[0].slot_3
            ? team && team[0] && team[0].slot_3
            : null;
    const slot4 =
        team && team[0] && team[0].slot_4
            ? team && team[0] && team[0].slot_4
            : null;
    const slot5 =
        team && team[0] && team[0].slot_5
            ? team && team[0] && team[0].slot_5
            : null;
    const slot6 =
        team && team[0] && team[0].slot_6
            ? team && team[0] && team[0].slot_6
            : null;

    return (
        <>
            <div className="BattleTeams">
                <h2>Battle Team</h2>
                <div>
                    <h4>{slot1}</h4>
                    <GrabTheImage Pokemon={slot1} />
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
            </div>
        </>
    );
}

export default BattleTeam;
