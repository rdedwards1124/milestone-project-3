const getUsers2 = "SELECT * FROM allusers"
const getUserById = "SELECT * FROM allusers WHERE id = $1"
const checkEmailExists = "SELECT s FROM allusers s WHERE s.email = $1"
const addUser = "INSERT INTO allusers (username, email, password) VALUES ($1, $2, $3)"
const deleteUser = "DELETE FROM allusers WHERE id = $1"
const updateUser = "UPDATE allusers SET username = $1 WHERE id = $2"

module.exports = {
    getUsers2,
    getUserById,
    checkEmailExists,
    addUser,
    deleteUser,
    updateUser,
}