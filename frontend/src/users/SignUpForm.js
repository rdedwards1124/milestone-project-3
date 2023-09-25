import { useState } from "react";
import { useHistory } from "react-router";

function SignUpForm() {
    const history = useHistory();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    async function handleSubmit(e) {
        e.preventDefault();

        await fetch(`http://localhost:4000/users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        console.log(user);

        history.push(`/login`);
    }

    return (
        <main>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            required
                            value={user.username}
                            onChange={(e) =>
                                setUser({ ...user, username: e.target.value })
                            }
                            className="form-control"
                            id="username"
                            name="username"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={user.email}
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={user.password}
                            onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
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
                    value="Sign Up"
                />
            </form>
            <div className="bottom">
                <h3>Signed up already?</h3>
                <button
                    onClick={() => {
                        history.push(`/login`);
                    }}
                >
                    Click Here
                </button>
            </div>
        </main>
    );
}

export default SignUpForm;
