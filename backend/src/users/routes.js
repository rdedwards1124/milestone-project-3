const { Router } = require('express')
const controller = require("./controller")

const router = Router()

router.get("/", controller.getUsers)
router.post("/", controller.addUser)
router.get("/:id", controller.getUserById)
router.get("/username/:username", controller.getUserByUsername);
router.put("/:id", controller.updateUser)
router.delete("/:id", controller.deleteUser)



module.exports = router