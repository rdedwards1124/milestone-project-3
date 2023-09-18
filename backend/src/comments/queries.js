const getComments2 = "SELECT * FROM comments"
const getCommentsByUserId = "SELECT * FROM comments WHERE user_id = $1"
const getCommentByUserCommentId = "SELECT * FROM comments WHERE user_id = $1 AND comment_id = $2"
const addComment = "INSERT INTO comments (comment_text, user_id, trade, will_trade, trade_for) VALUES ($1, $2, $3, $4, $5)"
const deleteComment = "DELETE FROM comments WHERE user_id = $1 AND comment_id = $2"
const updateComment = "UPDATE comments SET comment_text = $1 WHERE comment_id = $2"


module.exports = {
    getComments2,
    getCommentsByUserId,
    getCommentByUserCommentId,
    addComment,
    deleteComment,
    updateComment,
}

// updateComment is currently not in use. Might implement this feature later...