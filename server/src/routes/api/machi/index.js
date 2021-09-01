const { Router } = require("express");
const db = require("../../../utils/database");
const router = Router();

router.get('/', (req, res) => {
    let query = `SELECT * FROM machi`;
    db.query(query, (err, results) => {
        res.json(results);
    })
})

router.use('/create', require('./create'))
router.use('/get', require('./get'))

module.exports = router;