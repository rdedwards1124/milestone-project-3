
import { useHistory } from "react-router";
import axios from "axios";
import { useAuth } from "./contexts/AuthContext";
import "./Add-Style/Navigation.css";

function Navigation() {
    const history = useHistory();
    const { auth } = useAuth();
    const { username } = useAuth()

    const handleDelete = ()=>{
        axios.get('http://localhost:4000/authentication/logout').then(res=>{
            window.location.reload(true)
            history.push('/')
        }).catch(err=>console.log(err))
    }


    let loginActions

    if (auth) {
        loginActions = (
            <>
                <li style={{ float: "right" }}>
                    Logged in as {username}
                </li>
                <li>
                    <button
                        type="button"
                        style={{ float: "right", marginRight: "20px" }}
                        onClick={() => {handleDelete()}}
                    >
                        Log Out
                    </button>
                </li>
            </>
        );
    } else {
        loginActions = (
            <>
                <li>
                    <a href="#" onClick={() => history.push("/signup")}>
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
    }


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
                    <a href="#" onClick={() => history.push("/chatpage")}>
                        Chat Room
                    </a>
                </li>
            </ul>
            <div className="log">{loginActions}</div>
        </nav>
    );
}

export default Navigation;


/*


*/