import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";


function Navigation() {
    const history = useHistory();

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
                        Places
                    </a>
                </li>

            </ul>
        </nav>
    );

}

export default Navigation;