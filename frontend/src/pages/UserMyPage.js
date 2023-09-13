import "../Add-Style/UserMyPage.css";

function UserMyPage() {
    return (
        <>
            <div>
                <h1>USERNAME</h1>
                <div className="SearchedPoke">
                    <div className="SearchedPokeImg">
                        <img
                            width="90%"
                            src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                        ></img>
                    </div>
                    <div className="SearchedPokeInfo">
                        <ul>
                            <li>Nintendo Name: </li>
                            <li>Friend Code: </li>
                        </ul>
                        <div className="buttons">
                            <button type="submit">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserMyPage;
