import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import "./Add-Style/Navigation.css";

function Navigation() {
    const history = useHistory();

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

    return (
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={() => history.push("/")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => {}}>
                        My Page
                    </a>
                </li>
                
            </ul>
            <div className="log">{loginActions}</div>
        </nav>
    );
}

export default Navigation;
