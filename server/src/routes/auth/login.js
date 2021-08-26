const { Router } = require("express");
const db = require("../../utils/database");
const router = Router();
const bcrypt = require('bcrypt')

router.post('/', (req, res) => {
    let { username, password } = req.body;

    let query = `
        SELECT  * FROM users WHERE username = ?
    `

    
    db.query(query, [username], (err, results) => {
        if(err) throw err;

        if (results.length > 0) {
            bcrypt.compare(password, results[0].password, (err, response) => {
                if(response) {
                    req.session.user = results;
                    //console.log(req.session.user);
                    res.send(results);
                }  else {
                    res.send({ message: "Wrong username/password combination!" });
                }
            })
        } else {
            res.send({ message: "User doesn't exist" });
        }
    })
})

module.exports = router;