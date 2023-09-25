import { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import "../Add-Style/LoginForm.css";

function LoginForm() {
    const history = useHistory();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState(null);
    const { auth } = useAuth();
    const { username } = useAuth();

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:4000/authentication", credentials)
            .then((res) => {
                if (res.data.Status === "Success") {
                    history.push(`/`);
                } else {
                    alert(res.data.Error);
                }
            })
            .then((err) => console.log(err));
    };

    let logInPage;
    if (!auth) {
        logInPage = (
            <>
                <main>
                    <h1>Login</h1>
                    {errorMessage !== null ? (
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    ) : null}
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-sm-4 form-group somePadding">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={credentials.email}
                                    onChange={(e) =>
                                        setCredentials({
                                            ...credentials,
                                            email: e.target.value,
                                        })
                                    }
                                    className="form-control"
                                    id="email"
                                    name="email"
                                />
                            </div>
                            <div className="col-sm-4 form-group somePadding">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    required
                                    value={credentials.password}
                                    onChange={(e) =>
                                        setCredentials({
                                            ...credentials,
                                            password: e.target.value,
                                        })
                                    }
                                    className="form-control"
                                    id="password"
                                    name="password"
                                />
                            </div>
                        </div>
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Login"
                        />
                    </form>
                </main>
                <div className="bottom" >
                    <h3>Need to register?</h3>
                    <button
                        onClick={() => {
                            history.push(`/signup`);
                        }}
                    >
                        Click Here
                    </button>
                </div>
            </>
        );
    } else {
        logInPage = (
            <>
                <div className="top">
                    <h1>You are logged in!!</h1>
                </div>
                <div className="middle">
                    <h2>Welcome to Pokepipeline, {username}!!</h2>
                    <img src="https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png" alt="Pikachu waving hi" />
                </div>
                <div className="bottom">
                    <h3>LogOut?</h3>
                    <button
                        onClick={() => {
                            handleDelete();
                        }}
                    >
                        Click Here
                    </button>
                </div>
            </>
        );
    }

    const handleDelete = () => {
        axios
            .get("http://localhost:4000/authentication/logout")
            .then((res) => {
                window.location.reload(true);
                history.push("/login");
            })
            .catch((err) => console.log(err));
    };

    return <>{logInPage}</>;
}

export default LoginForm;

