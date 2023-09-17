import "./Add-Style/Home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [trainers, setTrainers] = useState([]);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    async function fetchData() {
        const response = await fetch(`http://localhost:4000/users`);
        const resData = await response.json();
        if (resData) {
            setTrainers(resData);
        }
    }

    // let info = trainers[0] && trainers[0].username

    // const users = trainers.map((trainer) => {
    //     return(
    //         <>
    //             <li>{trainer.username}</li>
    //         </>
    //     )
    // })


    return (
        <main className="HomePage">
            <h1>Welcome to PokéPipeline!!!</h1>
            <div>
                <img
                    height=""
                    width="80%"
                    src="https://techcrunch.com/wp-content/uploads/2016/08/pokemon-influence.png"
                    alt="Pokemon"
                />
            </div>
            <h2>Current Users</h2>
            <div>
                {/* {users} */}
                {/* {trainers[0].username} */}
                {/* {info} */}
            </div>
        </main>
    );
}

export default Home;


