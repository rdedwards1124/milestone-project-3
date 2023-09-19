const { Router } = require('express')
const controller = require("./controller")

const router = Router()

router.get("/", controller.getFavorites)
router.get("/:user_id", controller.getFavoritesByUserId)
router.get("/:user_id/:id", controller.getFavoriteByUserFavoriteId)
router.post("/", controller.addFavorite)
router.delete("/:user_id/:id", controller.deleteFavorite)

module.exports = router