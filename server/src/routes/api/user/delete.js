const { Router } = require("express");
const db = require("../../../utils/database");
const router = Router();

router.delete('/:id', (req, res) => {
    let { id } = req.params;
    let query = `DELETE FROM users WHERE id = ?`
    db.query(query, [id], (err, results) => {
        if(err) throw err
        res.send(results.affectedRows)
    })
})

module.exports = router;