import "../Add-Style/SearchPage.css";

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
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default SearchPage;
