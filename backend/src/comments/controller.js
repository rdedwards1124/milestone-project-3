const pool = require("../../db");
const queries = require("./queries");

const getComments = (req, res) => {
    pool.query(queries.getComments2, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


module.exports = {
    getComments,
};