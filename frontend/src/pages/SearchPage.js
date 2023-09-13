import "../Add-Style/SearchPage.css";
import electric from '../Other/electric.png'
import water from '../Other/water.png'
import fire from '../Other/fire.png'

function SearchPage() {
    return (
        <>
            <div className="CenterIt">
                <div>
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
                            <li>Base Stat Total: </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>Search By Type</h2>
                    <div className="types">
                <div>
                    {/* <!-- <h2>Electric</h2> --> */}
                    <a href="">
                        <img src={electric} alt="electric symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Water</h2> --> */}
                    <a href="">
                        <img src={water} alt="water symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Fire</h2> --> */}
                    <a href="">
                        <img src={fire} alt="fire symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Grass</h2> --> */}
                    <a href="">
                        <img src="../assets/Other/grass.png" alt="grass symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Ice</h2> --> */}
                    <a href="">
                        <img src="../assets/Other/ice.png" alt="ice symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Rock</h2> --> */}
                    <a href="">
                        <img src="../assets/Other/rock.png" alt="rock symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Ground</h2> --> */}
                    <a href=""><img src="../assets/Other/ground.png" alt="ground symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Steel</h2> --> */}
                    <a href=""><img src="../assets/Other/steel.png" alt="steel symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Poison</h2> --> */}
                    <a href=""><img src="../assets/Other/poison.png" alt="poison symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Fairy</h2> --> */}
                    <a href=""><img src="../assets/Other/fairy.png" alt="fairy symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Dark</h2> --> */}
                    <a href=""><img src="../assets/Other/dark.png" alt="dark symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Psychic</h2> --> */}
                    <a href=""><img src="../assets/Other/psychic.png" alt="psychic symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Fighting</h2> --> */}
                    <a href=""><img src="../assets/Other/fighting.png" alt="fighting symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Flying</h2> --> */}
                    <a href=""><img src="../assets/Other/flying.png" alt="flying symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Bug</h2> --> */}
                    <a href=""><img src="../assets/Other/bug.png" alt="bug symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Ghost</h2> --> */}
                    <a href=""><img src="../assets/Other/ghost.png" alt="ghost symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Normal</h2> --> */}
                    <a href=""><img src="../assets/Other/normal.png" alt="normal symbol"/></a>
                </div>
                <div>
                    {/* <!-- <h2>Dragon</h2> --> */}
                    <a href=""><img src="../assets/Other/dragon.png" alt="dragon symbol"/></a>
                </div>
            </div> 
                </div>
            </div>
        </>
    );
}

export default SearchPage;
