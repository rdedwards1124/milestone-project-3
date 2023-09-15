import { Link } from "react-router-dom";

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

function AllTypes() {
    return (
        <div className="types">
            <div>
                {/* <!-- <h2>Electric</h2> --> */}
                <Link to={`/searchtype/13`}>
                    <img src={electric} alt="electric symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Water</h2> --> */}
                <Link to={`/searchtype/11`}>
                    <img src={water} alt="water symbol" />
                </Link>
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
    );
}

export default AllTypes;
