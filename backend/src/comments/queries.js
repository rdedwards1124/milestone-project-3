const getComments2 = "SELECT * FROM comments"
const getCommentByCommentId = "SELECT * FROM comments WHERE comment_id = $1"
const getCommentsByUserId = "SELECT * FROM comments WHERE user_id = $1"
const getCommentsTrade = "SELECT * FROM comments WHERE trade = $1"
const getCommentsWillTrade = "SELECT * FROM comments WHERE will_trade = $1"
const getCommentsTradeFor = "SELECT * FROM comments WHERE trade_for = $1"
// const checkEmailExists = "SELECT s FROM comments s WHERE s.email = $1"
// const checkUsernameExists = "SELECT s FROM comments s WHERE s.username = $1"

// Not sure how to do this one.. have to include unique user id somehow...
const addComment = "INSERT INTO comments (username, email, password) VALUES ($1, $2, $3)"

const deleteComment = "DELETE FROM comments WHERE comment_id = $1"
const updateComment = "UPDATE comments SET comment_text = $1 WHERE comment_id = $2"


module.exports = {
    getComments2,
    getCommentByCommentId,
    getCommentsByUserId,
    getCommentsTrade,
    getCommentsWillTrade,
    getCommentsTradeFor,
    // addComment,
    deleteComment,
    updateComment,
}