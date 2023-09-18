const pool = require("../../db");
const queries = require("./queries");

const getComments = (req, res) => {
    pool.query(queries.getComments2, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getCommentsByUserId = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    pool.query(queries.getCommentsByUserId, [user_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getCommentByUserCommentId = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    const id = parseInt(req.params.id);
    pool.query(queries.getCommentByUserCommentId, [user_id, id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addComment = (req, res) => {
    const { comment_text, user_id, trade, will_trade, trade_for } = req.body;
    pool.query(
        queries.addComment,
        [comment_text, user_id, trade, will_trade, trade_for],
        (error, results) => {
            if (error) throw error;
            res.status(201).send("Comment created successfully!");
            console.log("Comment created!");
        }
    );
};

const deleteComment = (req, res) => {
    const id = parseInt(req.params.id);
    const user_id = parseInt(req.params.user_id);
    pool.query(queries.getCommentByUserCommentId, [user_id, id], (error, results) => {
        const noCommentFound = !results.rows.length;
        if (noCommentFound) {
            res.send("Comment does not exist...");
        }

        pool.query(queries.deleteComment, [user_id, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Comment deleted successfully!");
        });
    });
};


module.exports = {
    getComments,
    getCommentsByUserId,
    getCommentByUserCommentId,
    addComment,
    deleteComment,
};
