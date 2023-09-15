const pool = require("../../db");
const queries = require("./queries");

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

const addUser = (req, res) => {
    const { username, email, password } = req.body;

    // check if email already exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists!");
        } else {
            // add user to db(allusers)
            pool.query(
                queries.addUser,
                [username, email, password],
                (error, results) => {
                    if (error) throw error;
                    res.status(201).send("User created successfully!");
                    console.log("User created!");
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
    const { username } = req.body;

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist...");
        }

        pool.query(queries.updateUser, [username, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User info updated successfully!");
        });
    });
};

const updateUserEmail = (req, res) => {
    const id = parseInt(req.params.id);
    const { email } = req.body;

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist...");
        }

        pool.query(queries.updateUserEmail, [email, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User info updated successfully!");
        });
    });
};

module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
    updateUserEmail,
};
