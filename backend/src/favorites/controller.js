const pool = require("../../db");
const queries = require("./queries");

const getFavorites = (req, res) => {
    pool.query(queries.getFavorites2, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getFavoritesByUserId = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    pool.query(queries.getFavoritesByUserId, [user_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


module.exports = {};