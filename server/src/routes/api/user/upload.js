const { Router } = require("express");
const db = require("../../../utils/database");
const router = Router();

router.post('/avatar/:id', (req, res) => {
    const { id } = req.params;
    const avatar = req.files.avatar;
    let query = `
        UPDATE users SET avatar = ?, updated_at = ? WHERE id = ?
    `
    if(!req.files) {
        res.json({
            status: false,
            message: 'No file uploaded',
            error: 500
        })
    } else {
        const date = new Date().toLocaleString()
        let uploadPath = 'src/public/img/' + avatar.name;
        avatar.mv(uploadPath, (err) => {
            if(err) throw err
            db.query(query, [avatar.name, date, id], (err, results) => {
                if(err) throw err;
                res.send(results); 
            })
        })
    }
})

module.exports = router;