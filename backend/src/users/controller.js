const pool = require("../../db");
const queries = require("./queries");

const bcrypt = require("bcrypt");

const getUsers = (req, res) => {
    pool.query(queries.getUsers2, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
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
    const { username, email } = req.body;

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist...");
        }

        pool.query(
            queries.updateUser,
            [username, email, id],
            (error, results) => {
                if (error) throw error;
                res.status(200).send("User info updated successfully!");
            }
        );
    });
};

const signInUser = (req, res) => {
    const { email, password } = req.body;
    const passwordEntered = password;

    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (!results.rows.length) {
            res.send("email is not in database!");
        } else {
            pool.query(queries.getPassword, [email], async (error, results) => {
                const storedHashedPassword = results.rows[0].password;
                bcrypt.compare(
                    passwordEntered,
                    storedHashedPassword,
                    (err, isMatch) => {
                        if (err) {
                            res.send("error");
                        }
                        if (isMatch) {
                            res.send("log in success!");
                        } else {
                            res.send("wrong credentials...");
                        }
                    }
                );
            });
        }
    });
};

module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
    signInUser,
};

// if (!results.rows[0].password) {
//     res.send("email not in database")
// } else if (await bcrypt.compare(passwordEntered, storedHashedPassword)) {
//     res.send("User log in success!!")
// } else {
//     res.send("wrong credentials...")
// }
