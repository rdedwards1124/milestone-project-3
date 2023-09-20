const pool = require("../../db");
const queries = require("./queries");
const userQueries = require("../users/queries");

const jwt = require("json-web-token");
const bcrypt = require("bcrypt");


const signInUser = (req, res) => {
    const { email, password } = req.body;
    const passwordEntered = password;

    pool.query(userQueries.checkEmailExists, [email], (error, results) => {
        if (!results.rows.length) {
            res.send("email is not in database!");
        } else {
            console.log(results.rows[0].s)
            pool.query(userQueries.getPassword, [email], async (error, results) => {
                const storedHashedPassword = results.rows[0].password;
                const stuff = results.rows[0]
                const other = results.rows[0].id
                bcrypt.compare(
                    passwordEntered,
                    storedHashedPassword,
                    (err, isMatch) => {
                        if (err) {
                            res.send("error");
                        }
                        if (isMatch) {
                            // res.send("log in success!");
                            res.status(200).json({ stuff, token: other});
                        } else {
                            res.send("wrong credentials...");
                        }
                    }
                );
            });
        }
    });
};


const getUserData = async (req, res) => {
    try {
        res.status(200).json(req.currentUser)
    } catch (e) {
        res.status(500).json({ message: "Server did an oppsie" });
    }
}

module.exports = {
    signInUser,
    getUserData
};