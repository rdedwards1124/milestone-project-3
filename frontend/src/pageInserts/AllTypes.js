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
                <Link to={`/searchtype/10`} >
                    <img src={fire} alt="fire symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Grass</h2> --> */}
                <Link to={`/searchtype/12`} >
                    <img src={grass} alt="grass symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Ice</h2> --> */}
                <Link to={`/searchtype/15`} >
                    <img src={ice} alt="ice symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Rock</h2> --> */}
                <Link to={`/searchtype/6`} >
                    <img src={rock} alt="rock symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Ground</h2> --> */}
                <Link to={`/searchtype/5`} >
                    <img src={ground} alt="ground symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Steel</h2> --> */}
                <Link to={`/searchtype/9`} >
                    <img src={steel} alt="steel symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Poison</h2> --> */}
                <Link to={`/searchtype/4`} >
                    <img src={poison} alt="poison symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Fairy</h2> --> */}
                <Link to={`/searchtype/18`} >
                    <img src={fairy} alt="fairy symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Dark</h2> --> */}
                <Link to={`/searchtype/17`} >
                    <img src={dark} alt="dark symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Psychic</h2> --> */}
                <Link to={`/searchtype/14`} >
                    <img src={psychic} alt="psychic symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Fighting</h2> --> */}
                <Link to={`/searchtype/2`} >
                    <img src={fighting} alt="fighting symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Flying</h2> --> */}
                <Link to={`/searchtype/3`} >
                    <img src={flying} alt="flying symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Bug</h2> --> */}
                <Link to={`/searchtype/7`} >
                    <img src={bug} alt="bug symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Ghost</h2> --> */}
                <Link to={`/searchtype/8`} >
                    <img src={ghost} alt="ghost symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Normal</h2> --> */}
                <Link to={`/searchtype/1`} >
                    <img src={normal} alt="normal symbol" />
                </Link>
            </div>
            <div>
                {/* <!-- <h2>Dragon</h2> --> */}
                <Link to={`/searchtype/16`} >
                    <img src={dragon} alt="dragon symbol" />
                </Link>
            </div>
        </div>
    );
}

export default AllTypes;
