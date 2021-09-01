const { Router } = require("express");
const db = require("../../../utils/database");
const router = Router();

router.get('/:id', (req, res) => {
    let { id } = req.params;
    let query = `
     SELECT * FROM machi WHERE id = ?
    `
    db.query(query, [id], (err, results) => {
        if(err) throw err;
        if(results) {
            res.json(results[0]);
        } else {
            let message = {
                message: 'Not found',
                status: 404
            }
            return res.json(message)
        }
    })
})

module.exports = router;