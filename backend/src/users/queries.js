const getUsers2 = "SELECT * FROM allusers"
const getUserById = "SELECT * FROM allusers WHERE id = $1"

const getUserByUsername = "SELECT * FROM allusers WHERE username = $1"

const checkEmailExists = "SELECT * FROM allusers WHERE email = $1"
const checkUsernameExists = "SELECT s FROM allusers s WHERE s.username = $1"
const addUser = "INSERT INTO allusers (username, email, password) VALUES ($1, $2, $3)"
const deleteUser = "DELETE FROM allusers WHERE id = $1"

const updateUser = "UPDATE allusers SET username = $1, email = $2, bestpokemon = $3 WHERE id = $4"
const updateUser2 = "UPDATE allusers SET bestpokemon = $1 WHERE id = $2"


const checkEmailAndPassword = "SELECT * FROM allusers WHERE email = $1 AND password = $2"
const getPassword = "SELECT password FROM allusers WHERE email = $1;"

const getByEmail = "SELECT * FROM allusers WHERE email = $1"


module.exports = {
    getUsers2,
    getUserById,
    getUserByUsername,
    checkEmailExists,
    checkUsernameExists,
    addUser,
    deleteUser,
    updateUser,
    updateUser2,
    checkEmailAndPassword,
    getPassword,
    getByEmail
}

