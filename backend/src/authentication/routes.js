const { Router } = require('express')
const controller = require("./controller")

const router = Router()

router.post("/", controller.signInUser)
router.get("/profile", controller.getUserData)


module.exports = router