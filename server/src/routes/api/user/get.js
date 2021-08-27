const { Router } = require("express");
const db = require("../../../utils/database");
const router = Router();

router.get('/:username', (req, res) => {
    let { username } = req.params;
    let query = `SELECT * FROM users WHERE username = ?`
    if(! username) {
        return res.status(404).send('User not found')
    } else {
        db.query(query, [username], (err, results) => {
            if(err) throw err;
            var userData = {
                username: results[0].username,
                email: results[0].email,
                avatar: results[0].avatar,
                created_at: results[0].created_at,
                updated_at: results[0].updated_at  
            }
            res.json(userData)
        })
    }
})

module.exports = router;