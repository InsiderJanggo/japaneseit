const { Router } = require("express");
const db = require("../../../utils/database");
const router = Router();


/**
 * Data form:
 * {
	"kanji": "右",
	"reading": "みぎ",
	"onyomi": "ウ・ユウ",
	"kunyomi": "みぎ・たすける",
	"meaning": "Right"
    }
 */

router.post('/', (req, res) => {
    const query = `
        INSERT INTO kanji (kanji, reading, onyomi, kunyomi, meaning)
        VALUES (?, ?, ?, ?, ?)
    `
    let { kanji, reading, onyomi, kunyomi, meaning } = req.body;

    if(!kanji || !reading || !onyomi || !kunyomi || !meaning) {
        let err = {
            message: 'Field can`t be empty'
        }
        return res.status(500).json(err)
    }

    db.query(query, [kanji, reading, onyomi, kunyomi, meaning], (err, results) => {
        if(err) throw err;
        if(results) {
            res.json(results);
        }
    })
})

router.post('/translation/:id', (req, res) => {
    let { meaning } = req.body;
    let { id } = req.params;

    let query = `
            UPDATE kanji SET meaning = ?, WHERE id = ?
    `

    if(!meaning) {
        res.send('Meaning cant be empty')
    }
    
    db.query(query, [meaning, id], (err, results) => {
        if(err) throw err;
        if(results) {
            res.json(results);
        }
    })
})

module.exports = router;