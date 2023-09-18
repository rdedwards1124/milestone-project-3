const { Router } = require('express')
const controller = require("./controller")

const router = Router()

router.get("/", controller.getBattleTeams)
router.get("/:user_id", controller.getBattleTeamByUserId)
router.post("/", controller.addBattleTeam)
router.put("/:user_id", controller.updateBattleTeam)

module.exports = router