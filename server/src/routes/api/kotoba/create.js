const { Router } = require("express");
const db = require("../../../utils/database");
const router = Router();

router.post('/:id', (req, res) => {
    let { id } = req.params;
    let { kotoba } = req.body;
    var query= `
        INSERT INTO kotoba VALUES (?, ?)
        SELECT * FROM kanji JOIN 
    `
    db.query(query, )
})

module.exports = router;