const { Router } = require("express");
const db = require("../../../utils/database");
const router = Router();


router.get('/', (req, res) => {
    let query = `
        SELECT * FROM users
    `
    db.query(query, (err, results) => {
        if(err) throw err;
        
        for(let index = 0; index < results.length; index++) {
            let userData = [
               {
                 id: results[index].id,
                 username: results[index].username,
                 email: results[index].email,
                 avatar: results[index].avatar,
                 created_at: results[index].created_at,
                 updated_at: results[index].updated_at   
               }
            ]
            res.json(userData)
        }
        
    })
})

router.use('/get', require('./get'))
router.use('/upload', require('./upload'))
router.use('/update', require('./update'));

module.exports = router;