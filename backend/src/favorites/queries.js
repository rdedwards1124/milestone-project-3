
const getFavorites = "SELECT * FROM favorites"
const getFavoritesByUserId = "SELECT * FROM favorites WHERE user_id = $1"
const getFavoritesByPokemon = "SELECT * FROM favorites WHERE pokemon = $1"
const getFavoriteByUserFavoriteId = "SELECT * FROM favorites WHERE user_id = $1 AND favorite_id = $2"
const addFavorite = "INSERT INTO favorites (pokemon, user_id) VALUES ($1, $2)"
const deleteFavorite = "DELETE FROM favorites WHERE user_id = $1 AND pokemon = $2"

const getFavoriteByUserPokemon = "SELECT * FROM favorites WHERE user_id = $1 AND pokemon = $2"

const checkPokemonAndUserId = "SELECT s FROM favorites WHERE s.user_id = $1 AND s.pokemon = $2"

module.exports = {
    getFavorites,
    getFavoritesByUserId,
    getFavoritesByPokemon,
    getFavoriteByUserFavoriteId,
    addFavorite,
    deleteFavorite,
    checkPokemonAndUserId,
    getFavoriteByUserPokemon
}