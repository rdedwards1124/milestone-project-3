import "./Add-Style/Home.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import GrabTheImage from "./pageInserts/GrabTheImage";

function Home() {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

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
// 
    const filtered = trainers.filter((user) => user.bestpokemon !== null)

    const getRandomTrainers = () => {
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 6);
    };

    const randomTrainers = getRandomTrainers();

    const users = randomTrainers.map((trainer) => (
        <div className="EachUser" key={trainer.id}>
            <Link to={`/userpage/${trainer.id}`}>
                <h4 className="shrink-text">{trainer.username}</h4>
                {trainer.bestpokemon ? (
                    <GrabTheImage Pokemon={trainer.bestpokemon} />
                ) : (
                    <img
                        className="Pokeball"
                        src="https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg"
                        alt="Default Pokeball Image"
                    />
                )}
            </Link>
        </div>
    ));

    return (
        <main className="HomePage">
            <h1>Welcome to PokéPipeline!!!</h1>
            <div className="HomeImg">
                <img
                    height=""
                    width="80%"
                    src="https://techcrunch.com/wp-content/uploads/2016/08/pokemon-influence.png"
                    alt="Pokemon"
                />
            </div>
            <div className="HomeBottom">
                <h2>Current Users</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error.message}</p>
                ) : trainers.length > 0 ? (
                    <div className="Users">{users}</div>
                ) : (
                    <p>No users found.</p>
                )}
            </div>
        </main>
    );
}

export default Home;

