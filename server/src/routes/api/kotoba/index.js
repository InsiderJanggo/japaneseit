const { Router } = require("express");
const db = require("../../../utils/database");
const router = Router();

router.get('/', (req, res) => {
    var sql = "SELECT * FROM kotoba";
    db.query(sql, (err, results) => {
        if(err) throw err;
        if(results) {
            return res.json(results)
        }
    })
})

module.exports = router;