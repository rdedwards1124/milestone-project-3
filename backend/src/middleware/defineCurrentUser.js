require('dotenv').config()
const pool = require("../../db");
const userQueries = require("../users/queries");
const jwt = require('json-web-token')


async function defineCurrentUser(req, res, next){
    let currentUser;
    try {
        currentUser = pool.query()
        next()
    } catch (e) {
        req.currentUser = null;
        next()
    }
}


module.exports = defineCurrentUser