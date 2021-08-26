const { Router } = require("express");
const db = require("../../../utils/database");
const router = Router();

const addRoutes  = require('./add')
const getRoutes = require('./get')

router.get('/', (req, res) => {
    let query = `SELECT * FROM kanji`
    db.query(query, (err, results) => {
        if(err) throw err;
        res.json(results);
    })
})

router.use('/add', addRoutes)
router.use('/get', getRoutes)

module.exports = router;