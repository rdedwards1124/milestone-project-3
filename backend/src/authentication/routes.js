const { Router } = require('express')
const controller = require("./controller")

const router = Router()

router.post("/", controller.signInUser)
router.get("/", controller.verifyUser, controller.getUserData)
// controller.verifyUser: put this after profile
router.get("/logout", controller.logOutUser)

module.exports = router