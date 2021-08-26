const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    //DELETE THE USER SESSION COOKIE
    res.clearCookie('connect.sid')
    req.session.destroy((err) => {
        if(err) {
            res.json({
                message: err
            })
        } else {
            return res.redirect('http://localhost:3000/login');
        }
    });
})

module.exports = router;