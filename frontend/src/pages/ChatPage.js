import "../Add-Style/ChatPage.css";
import { Link } from "react-router-dom";

function ChatPage() {
    
    const ifLoggedIn = () => {
        return (
            <>
                <div>
                    <div>
                        <h1>Trainer Chat</h1>
                        <div></div>
                    </div>
                </div>
            </>
        );
    };

    return(
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
    )
}

export default ChatPage;
