const { Router } = require("express");
const db = require("../../../utils/database");
const router = Router();


/**
 * {
	    "machi": "上海",
	    "reading": "シャンハイ",
	    "romaji": "Shanghai"
    }   
 */
router.post('/', (req, res) => {
    let { machi, reading, romaji } = req.body;
    let query = ` 
        INSERT INTO machi (machi, reading, romaji) VALUES (?, ?, ?)
    `

    if(!machi || !reading || !romaji) {
        return res.send('Input Cant be empty')
    }
    
    db.query(query, [machi, reading, romaji], (err, results) => {
        if(err) throw err;
        if(results) return res.json(results)
    })
})

module.exports = router;