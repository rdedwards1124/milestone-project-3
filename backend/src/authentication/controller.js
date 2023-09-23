const pool = require("../../db");
const queries = require("./queries");
const userQueries = require("../users/queries");

const bcrypt = require("bcrypt");


const signInUser = (req, res) => {
    const { email, password } = req.body;
    const passwordEntered = password;

    pool.query(userQueries.checkEmailExists, [email], (error, results) => {
        if (!results.rows.length) {
            res.send("email is not in database!");
        } else {
            pool.query(userQueries.getPassword, [email], async (error, results) => {
                const storedHashedPassword = results.rows[0].password;
                bcrypt.compare(
                    passwordEntered,
                    storedHashedPassword,
                    async (err, isMatch) => {
                        if (err) return res.json({Error: "Password compare error"})
                        if (isMatch) {
                            
                            res.json({Status: "Success"})
                            console.log("log in success!!")
                        } else {
                            res.json({Status: "Wrong password"})
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