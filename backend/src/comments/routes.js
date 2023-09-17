const { Router } = require('express')
const controller = require("./controller")

const router = Router()

router.get("/", controller.getComments)
router.get("/:id", controller.getCommentByCommentId)
router.post("/", controller.addComment)
router.delete("/:id", controller.deleteComment)

module.exports = router