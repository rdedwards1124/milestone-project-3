const { Router } = require('express')
const controller = require("./controller")

const router = Router()

router.get("/", controller.getComments)
router.get("/:user_id", controller.getCommentsByUserId)
router.get("/:user_id/:id", controller.getCommentByUserCommentId)
router.post("/", controller.addComment)
router.delete("/:user_id/:id", controller.deleteComment)

module.exports = router