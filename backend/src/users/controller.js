const pool = require("../../db");
const queries = require("./queries");
const bcrypt = require("bcrypt");

const getUsers = (req, res) => {
    pool.query(queries.getUsers2, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
        // console.log(results.rows)
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
        // console.log(results.rows)
    });
};

const getUserByUsername = (req, res) => {
    const username = req.params.username; // Access the username from URL params

    pool.query(queries.getUserByUsername, [username], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const addUser = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // check if email already exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists!");
        } else {
            // then, check if username exists
            pool.query(
                queries.checkUsernameExists,
                [username],
                (error, results) => {
                    if (results.rows.length) {
                        res.send("Username is taken!");
                    } else {
                        pool.query(
                            queries.addUser,
                            [username, email, hashedPassword],
                            (error, results) => {
                                if (error) throw error;
                                res.status(201).send(
                                    "User created successfully!"
                                );
                                console.log("User created!");
                            }
                        );
                    }
                }
            );
        }
    });
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist...");
        }

        pool.query(queries.deleteUser, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User deleted successfully!");
        });
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { bestpokemon } = req.body;

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist...");
        }

        pool.query(
            queries.updateUser2,
            [bestpokemon, id],
            (error, results) => {
                if (error) throw error;
                res.status(200).send("User info updated successfully!");
            }
        );
    });
};


module.exports = {
    getUsers,
    getUserById,
    getUserByUsername,
    addUser,
    deleteUser,
    updateUser
};

