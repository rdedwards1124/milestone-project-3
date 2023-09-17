import "../Add-Style/UserMyPage.css";
import { Link } from "react-router-dom";

function UserMyPage() {

    const ifLoggedIn = ()=>{
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

    return (
        <>
            <div>
                <div>
                    <h1>Sorry... You must be logged in to access this page!</h1>
                </div>
                <div>
                    <img src="https://www.media.pokekalos.fr/img/site/erreur404.png" />
                </div>
                <div>
                    <Link to={`/`} ><p>Log In Here!</p></Link>
                    <p>or</p>
                    <Link to={`/`} ><p>Register Here!</p></Link>
                </div>
            </div>
        </>
    );
}

export default UserMyPage;
