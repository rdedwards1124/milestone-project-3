const getBattleTeams = "SELECT * FROM battleTeams"
const getBattleTeamByUserId = "SELECT * FROM battleTeams WHERE user_id = $1"
const addBattleTeam = "INSERT INTO battleTeams (slot_1, slot_2, slot_3, slot_4, slot_5, slot_6, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)"
const checkAllusersForId = "SELECT s FROM allusers s WHERE s.id = $1"
const checkUserExists = "SELECT s FROM battleTeams s WHERE s.user_id = $1"
const updateBattleTeam = "UPDATE battleTeams SET slot_1 = $1, slot_2 = $2, slot_3 = $3, slot_4 = $4, slot_5 = $5, slot_6 = $6 WHERE user_id = $7"


module.exports = {
    getBattleTeams,
    getBattleTeamByUserId,
    addBattleTeam,
    checkAllusersForId,
    checkUserExists,
    updateBattleTeam
}





/*

    changeSlot1BattleTeam,
    changeSlot2BattleTeam,
    changeSlot3BattleTeam,
    changeSlot4BattleTeam,
    changeSlot5BattleTeam,
    changeSlot6BattleTeam

    const changeSlot1BattleTeam = "UPDATE battleTeams SET slot_1 = $1 WHERE user_id = $2"
const changeSlot2BattleTeam = "UPDATE battleTeams SET slot_2 = $1 WHERE user_id = $2"
const changeSlot3BattleTeam = "UPDATE battleTeams SET slot_3 = $1 WHERE user_id = $2"
const changeSlot4BattleTeam = "UPDATE battleTeams SET slot_4 = $1 WHERE user_id = $2"
const changeSlot5BattleTeam = "UPDATE battleTeams SET slot_5 = $1 WHERE user_id = $2"
const changeSlot6BattleTeam = "UPDATE battleTeams SET slot_6 = $1 WHERE user_id = $2"

const deleteBattleTeam = "DELETE FROM battleTeams WHERE user_id = $1"

*/