import "../Add-Style/UserMyPage.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function UserMyPage() {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");

    const history = useHistory();

    async function fetchData() {
        try {
            const response = await fetch(`http://localhost:4000/users`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const resData = await response.json();
            setTrainers(resData);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);



    const userNames = trainers.map((trainer) => (
        <option key={trainer.id} value={trainer.id}>
            {trainer.username}
        </option>
    ));
    

    const handleOptionChange = (e) => {
        e.preventDefault();
        setSelectedOption(e.target.value);
    };

    const handleSubmit = (e) => {
        let one = 1
        let two = 2
        e.preventDefault();
        console.log(selectedOption);
        history.push(`/userpage/${selectedOption}`);
    };

    let ifLoggedIn;
    let ifLoggedOut;
    /*
    if (1 === 2) {
        ifLoggedIn = (
            <>
                <div>
                    <Link to={`/userpage/${user_id}`} >
                        <p>ENTER</p>
                    </Link>
                </div>
            </>
        );
    }
*/

    if (1 === 1) {
        ifLoggedOut = (
            <>
                <div>
                    <div>
                        <h1>
                            Sorry... You must be logged in to access this page!
                        </h1>
                    </div>
                    <div>
                        <img src="https://www.media.pokekalos.fr/img/site/erreur404.png" />
                    </div>
                    <div>
                        <Link to={`/login`}>
                            <p>Log In Here!</p>
                        </Link>
                        <p>or</p>
                        <Link to={`/signup`}>
                            <p>Register Here!</p>
                        </Link>
                    </div>
                    <div>
                        <h3>Dropdown Menu</h3>
                        {loading ? (
                        <p>Loading...</p>
                        ) : <form onSubmit={handleSubmit}>
                            <label htmlFor="dropdown">Select an option:</label>
                            <select
                                id="dropdown"
                                name="dropdown"
                                value={selectedOption}
                                onChange={handleOptionChange}
                            >
                                <option value="">select</option>
                                {userNames}
                            </select>
                            <br />
                            <input type="submit" value="Submit" />
                        </form>}
                        
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {ifLoggedIn}
            {ifLoggedOut}
        </>
    );

    // return (
    //     <>
    //         <div className="CenterIt">
    //             {/* <h1>{UserName}</h1> */}
    //             <h1>USERNAME</h1>
    //             <div className="UserDetails">
    //                 <div className="SearchedPokeImg">
    //                     {/* <GrabTheImage Pokemon={bestPokemon} /> */}
    //                 </div>
    //                 <div className="SearchedPokeInfo Info_ul">
    //                     <div className="button">
    //                         <button type="submit">Edit</button>
    //                     </div>
    //                     <ul>
    //                         <li>Nintendo Name: </li>
    //                         <li>Friend Code: </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //             {/* <BattleTeam UserId={UserId} /> */}
    //             <div className="Favorites">
    //                 <h2>My Favorites</h2>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //                 <div>
    //                     <h3>Pokemon</h3>
    //                     <img src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg" alt=""/>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // );
}

export default UserMyPage;

/*

{loading ? (
    <p>Loading...</p>
) :                 }



{loading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>Error: {error.message}</p>
        ) : (
            <div className="Users">
                <select>{userNames}</select>
            </div>
        )}

*/

/*

<form onSubmit={handleSubmit}>
                            <label htmlFor="dropdown">Select an option:</label>
                            <select
                                id="dropdown"
                                name="dropdown"
                                value={selectedOption}
                                onChange={handleOptionChange}
                            >
                                {userNames}
                            </select>
                            <br />
                            <input type="submit" value="Submit" />
                        </form>

*/
