const { Router } = require('express')
const controller = require("./controller")

const router = Router()

router.get("/", controller.getFavorites)
router.get("/:user_id", controller.getFavoritesByUserId)
router.get("/:user_id/:id", controller.getFavoriteByUserPokemon)
router.post("/", controller.addFavorite2)
// router.delete("/:user_id/:id", controller.deleteFavorite)
router.put("/:id", controller.updateFavorite)
router.delete("/:id", controller.deleteFavorite2)


module.exports = router