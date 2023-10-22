const pool = require("../../db");
const queries = require("./queries");
const userQueries = require("../users/queries");

const getFavorites = (req, res) => {
    pool.query(queries.getFavorites, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getFavoritesByUserId = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    pool.query(queries.getFavoritesByUserId, [user_id], (error, results) => {
        if (!results.rows.length) {
            res.send("This user does not exist!!");
        } else {
            res.status(200).json(results.rows);
        }
    });
};

const getFavoriteByUserPokemon = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    const { pokemon } = req.body
    pool.query(queries.getFavoritesByUserId, [user_id], (error, results) => {
        if (!results.rows.length) {
            res.send("This user does not exist!!");
        } else {
            pool.query(queries.getFavoriteByUserPokemon, [user_id, pokemon], (error, results) => {
                if (!results.rows.length) {
                    res.send("Pokemon is not in list!!");
                } else {
                    res.status(200).json(results.rows);
                }
            });
        }
    });
};

const addFavorite = (req, res) => {
    const { pokemon, user_id } = req.body;

    pool.query(userQueries.getUserById, [user_id], (error, results) => {
        if (!results.rows.length) {
            res.send("This user does not exist!!");
        } else {
            pool.query(queries.getFavoriteByUserPokemon, [user_id, pokemon], (error, results) => {
                if (results.rows.length) {
                    // res.send("this pokemon is in your list already.");
                    return res.json({ Status: "Error" });
                } else {
                    pool.query(queries.addFavorite, [pokemon, user_id], (error, results) => {
                        if (error) throw error;
                        res.status(201).send("Pokemon added!")
                    })
                }
            })
        }
    });
}

const deleteFavorite = (req, res) => {
    const id = parseInt(req.params.id);
    const user_id = parseInt(req.params.user_id);
    const { pokemon } = req.body
    pool.query(queries.getFavoriteByUserPokemon, [user_id, pokemon], (error, results) => {
        const noCommentFound = !results.rows.length;
        if (noCommentFound) {
            res.send("pokemon is not in the list...");
        }
        pool.query(queries.deleteFavorite, [user_id, pokemon], (error, results) => {
            if (error) throw error;
            res.status(200).send("pokemon deleted successfully!");
        });
    });
};

const deleteFavorite2 = (req, res) => {
    // const user_id = parseInt(req.params.user_id);
    const id = parseInt(req.params.id);
    // const { pokemon } = req.body
    pool.query(queries.getFavoriteByFavoriteId, [id], (error, results) => {
        const noCommentFound = !results.rows.length;
        if (noCommentFound) {
            res.send("pokemon is not in the list...");
        }
        pool.query(queries.deleteFavorite2, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("pokemon deleted successfully!");
        });
    });
};

// Need to create new method to update the isShiny column!
const updateFavorite = (req, res) => {
    const id = parseInt(req.params.id);
    const { shiny } = req.body;

    pool.query(queries.getFavoriteByFavoriteId, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist...");
        }

        pool.query(
            queries.updateFavorite,
            [shiny, id],
            (error, results) => {
                if (error) throw error;
                res.status(200).send("User info updated successfully!");
            }
        );
    });
};

module.exports = {
    getFavorites,
    getFavoritesByUserId,
    getFavoriteByUserPokemon,
    addFavorite,
    deleteFavorite,
    deleteFavorite2,
    updateFavorite
};



/*

const getFavoriteByUserFavoriteId = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    const id = parseInt(req.params.id);
    pool.query(queries.getFavoritesByUserId, [user_id], (error, results) => {
        if (!results.rows.length) {
            res.send("This user does not exist!!");
        } else {
            pool.query(queries.getFavoriteByUserFavoriteId, [user_id, id], (error, results) => {
                if (!results.rows.length) {
                    res.send("Pokemon is not in list!!");
                } else {
                    res.status(200).json(results.rows);
                }
            });
        }
    });
};

*/