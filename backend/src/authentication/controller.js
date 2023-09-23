const jwtsecret = require("dotenv").config();
const pool = require("../../db");
const queries = require("./queries");
const userQueries = require("../users/queries");
const bcrypt = require("bcrypt");
const cookieParcer = require("cookie-parser");
const jwt = require("jsonwebtoken");

const signInUser = (req, res) => {
    const { email, password } = req.body;
    const passwordEntered = password;

    pool.query(userQueries.checkEmailExists, [email], (error, results) => {
        if (!results.rows.length) {
            res.send("email is not in database!");
        } else {
            const storedHashedPassword = results.rows[0].password;
            bcrypt.compare(
                passwordEntered,
                storedHashedPassword,
                async (err, isMatch) => {
                    if (err)
                        return res.json({ Error: "Password compare error" });
                    if (isMatch) {
                        const username = results.rows[0].username;
                        const token = jwt.sign({ username }, "jwt-secret-key", {
                            expiresIn: "1d",
                        });
                        res.cookie("token", token);
                        res.json({ Status: "Success" });
                        console.log("log in success!!");
                    } else {
                        res.json({ Status: "Wrong password" });
                    }
                }
            );
        }
    });
};

//Middleware
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Error: "not authenticated" });
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.json({ Error: "token is not okay" });
            } else {
                req.username = decoded.username;
                next();
            }
        });
    }
};

const getUserData = async (req, res) => {
    return res.json({ Status: "Success", username: req.username });
};

const logOutUser = (req, res) => {
    res.clearCookie("token");
    return res.json({ Status: "Success" });
};

module.exports = {
    signInUser,
    getUserData,
    verifyUser,
    logOutUser,
};

/*

const signInUser = (req, res) => {
    const { email, password } = req.body;
    const passwordEntered = password;

    pool.query(userQueries.checkEmailExists, [email], (error, results) => {
        // let user = pool.query(`SELECT * FROM allusers WHERE email = ${email}`);
        // console.log(user);
        if (!results.rows.length) {
            res.send("email is not in database!");
        } else {
            // console.log(results.rows.length)
            pool.query(userQueries.getPassword, [email], async (error, results) => {
                const storedHashedPassword = results.rows[0].password;
                // const stuff = results.rows
                // const other = results.rows[0].id
                // console.log(stuff)
                bcrypt.compare(
                    passwordEntered,
                    storedHashedPassword,
                    async (err, isMatch) => {
                        if (err) return res.json({Error: "Password compare error"})
                        if (isMatch) {
                            // res.send("log in success!");
                            res.json({Status: "Success"})
                            console.log("log in success!!")
                            // const { value } = await jwt.encode(process.env.JWT_SECRET, {
                            //     userId: user.id,
                            // });
                            // res.status(200).json({ user, token: value});
                        } else {
                            // res.send("wrong credentials...");
                            res.json({Status: "Wrong password"})
                        }
                    }
                );
            });
        }
    });
};

*/
