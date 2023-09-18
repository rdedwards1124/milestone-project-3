
const getFavorites = "SELECT * FROM favorites"
const getFavoritesByUserId = "SELECT * FROM favorites WHERE user_id = $1"
const getFavoriteByUserFavoritesId = "SELECT * FROM favorites WHERE user_id = $1 AND favorite_id = $2"
const addFavorite = "INSERT INTO favorites (pokemon, user_id) VALUES ($1, $2)"
const deleteFavorite = "DELETE FROM favorites WHERE user_id = $1 AND favorite_id = $2"

module.exports = {
    getFavorites,
    getFavoritesByUserId,
    getFavoriteByUserFavoritesId,
    addFavorite,
    deleteFavorite
}