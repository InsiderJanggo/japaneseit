const { Router } = require("express");
const db = require("../../utils/database");
const router = Router();
const bcrypt = require('bcrypt')

router.post('/', (req, res) => {
    let saltRounds = 10;
    let { username, email, password } = req.body;
    let query = `
        INSERT INTO users (username, email, password) VALUES (?,?,?)
    `
    if(!username || !email || !password) {
        return res.json({
            message: 'input cant be empty',
            status: 500
        })
    }

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if(err) throw err;
        bcrypt.hash(password, salt, (err, hash) => {
            if(err) throw err;
            if(hash) {
                db.query(query, [username, email, hash], (err, results) => {
                    if(err) throw err;
                    res.json(results);
                })
            }
        })
    })
})

module.exports = router;