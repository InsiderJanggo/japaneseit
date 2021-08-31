const { Router } = require("express");
const db = require("../../../utils/database");
const bcrypt = require('bcrypt');
const router = Router();

router.post('/username/:userid', (req, res) => {
    let { username, password } = req.body;
    let { userid } = req.params;

    if(!username || !password) {
        return res.send('Field can`t be empty');
    }

    let query = `
        UPDATE users SET username = ?, WHERE id = ?
    `

    db.query(query, [username, userid], (err, results) => {
        if(err) throw err;
        if (results.length > 0) {
            bcrypt.compare(password, results[0].password, (err, response) => {
                if(response) {
                    // req.session.user = results;
                    // //console.log(req.session.user);
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