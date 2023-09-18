const getUsers2 = "SELECT * FROM allusers"
const getUserById = "SELECT * FROM allusers WHERE id = $1"
const checkEmailExists = "SELECT s FROM allusers s WHERE s.email = $1"
const checkUsernameExists = "SELECT s FROM allusers s WHERE s.username = $1"
const addUser = "INSERT INTO allusers (username, email, password) VALUES ($1, $2, $3)"
const deleteUser = "DELETE FROM allusers WHERE id = $1"
const updateUser = "UPDATE allusers SET username = $1, email = $2 WHERE id = $3"

const checkEmailAndPassword = "SELECT * FROM allusers WHERE email = $1 AND password = $2"
const getPassword = "SELECT password FROM allusers WHERE email = $1;"


module.exports = {
    getUsers2,
    getUserById,
    checkEmailExists,
    checkUsernameExists,
    addUser,
    deleteUser,
    updateUser,
    checkEmailAndPassword,
    getPassword
}

