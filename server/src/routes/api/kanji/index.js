const { Router } = require("express");
const db = require("../../../utils/database");
const router = Router();

const addRoutes  = require('./add')
const getRoutes = require('./get')
const deleteRoutes = require('./delete')

router.get('/', (req, res) => {
    let query = `SELECT * FROM kanji`
    db.query(query, (err, results) => {
        if(err) throw err;
        res.json(results);
    })
})

router.get('/rand', (req, res) => {
    let query = `SELECT * FROM kanji ORDER BY RAND() LIMIT 12`
    db.query(query, (err, results) => {
        if(err) throw err;
        res.json(results);
    })
})

router.use('/delete', deleteRoutes)
router.use('/add', addRoutes)
router.use('/get', getRoutes)


module.exports = router;