const pool = require("../../db");
const userQueries = require("../users/queries");
const bcrypt = require("bcrypt");
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
                        const userID = results.rows[0].id
                        const token = jwt.sign({ username, userID }, "jwt-secret-key", {
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
                req.userID = decoded.userID
                next();
            }
        });
    }
};

const getUserData = async (req, res) => {
    return res.json({ Status: "Success", username: req.username, userID: req.userID });
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


