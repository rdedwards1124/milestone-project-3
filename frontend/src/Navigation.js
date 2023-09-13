import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { CurrentUser } from "./contexts/CurrentUser";
import "./Add-Style/Navigation.css";

function Navigation() {
    const history = useHistory();

    // const { currentUser } = useContext(CurrentUser);

    let loginActions = (
        <>
            <li>
                <a href="#" onClick={() => history.push("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li>
                <a href="#" onClick={() => history.push("/login")}>
                    Login
                </a>
            </li>
        </>
    );

    // if (currentUser) {
    //     loginActions = (
    //         <>
    //             <li style={{ float: "right" }}>
    //                 Logged in as {currentUser.firstName} {currentUser.lastName}
    //             </li>
    //             <li>
    //                 <button
    //                     type="button"
    //                     style={{ float: "right", marginRight: "20px" }}
    //                     onClick={() => {
    //                         localStorage.removeItem("token");
    //                         window.location.reload();
    //                     }}
    //                 >
    //                     Log Out
    //                 </button>
    //             </li>
    //         </>
    //     );


    return (
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={() => history.push("/")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/searchpage")}>
                        Search PKMN
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/usermypage")}>
                        My Page
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => {}}>
                        Chat Room
                    </a>
                </li>
            </ul>
            <div className="log">{loginActions}</div>
        </nav>
    );
}

export default Navigation;
