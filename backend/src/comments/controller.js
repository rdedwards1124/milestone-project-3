const pool = require("../../db");
const queries = require("./queries");

const getComments = (req, res) => {
    pool.query(queries.getComments2, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getCommentByCommentId = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCommentByCommentId, [id], (error, results) => {
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
    pool.query(queries.getCommentByCommentId, [id], (error, results) => {
        const noCommentFound = !results.rows.length;
        if (noCommentFound) {
            res.send("Comment does not exist...");
        }

        pool.query(queries.deleteComment, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Comment deleted successfully!");
        });
    });
};


module.exports = {
    getComments,
    getCommentByCommentId,
    addComment,
    deleteComment,
};
