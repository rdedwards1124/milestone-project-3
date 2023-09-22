const pool = require("../../db");
const queries = require("./queries");
const userQueries = require("../users/queries");

const getBattleTeams = (req, res) => {
    pool.query(queries.getBattleTeams, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getBattleTeamByUserId = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    // const {user_id} = req.body
    // console.log(user_id)
    pool.query(queries.getBattleTeamByUserId, [user_id], (error, results) => {
        // if (error) throw error;
        res.status(200).json(results.rows)
        // console.log(results.rows)
    });
};

const addBattleTeam = (req, res) => {
    const { slot_1, slot_2, slot_3, slot_4, slot_5, slot_6, user_id } =
        req.body;

    pool.query(userQueries.getUserById, [user_id], (error, results) => {
        if (!results.rows.length) {
            res.send("This user does not exist!!");
        } else {
            pool.query(queries.checkUserExists, [user_id], (error, results) => {
                if (results.rows.length) {
                    res.send("this trainer already has a battle team!!");
                } else {
                    pool.query(
                        queries.addBattleTeam,
                        [slot_1, slot_2, slot_3, slot_4, slot_5, slot_6, user_id],
                        (error, results) => {
                            if (error) throw error;
                            res.status(201).send("Battle Team Created!!");
                        }
                    );
                }
            });
        }
    });
};

const updateBattleTeam = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    const { slot_1, slot_2, slot_3, slot_4, slot_5, slot_6 } = req.body;
    pool.query(
        queries.getBattleTeamByUserId, [user_id], (error, results) => {
            if (!results.rows.length) {
                res.send("battle team does not exist...")
            } else {
                pool.query(queries.updateBattleTeam, [slot_1, slot_2, slot_3, slot_4, slot_5, slot_6, user_id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Battle Team updated!!")
                })
            }
        }
    );
};

module.exports = {
    getBattleTeams,
    getBattleTeamByUserId,
    addBattleTeam,
    updateBattleTeam
};

/*

    slot_1, slot_2, slot_3, slot_4, slot_5, slot_6

    pool.query(userQueries.getUserById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send("This user does not exist!!");
        } else {
            pool.query(queries.checkUserExists, [user_id], (error, results) => {
                if (results.rows.length) {
                    res.send("this trainer already has a battle team!!");
                } else {
                    pool.query(
                        queries.addBattleTeam,
                        [slot_1, slot_2, slot_3, slot_4, slot_5, slot_6, user_id],
                        (error, results) => {
                            if (error) throw error;
                            res.status(201).send("Battle Team Created!!");
                        }
                    );
                }
            });
        }
    });

*/
