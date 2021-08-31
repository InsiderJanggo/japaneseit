const { Router } = require("express");
const router = Router();

const loginRoutes = require('./login')
const registerRoutes = require('./register')
const logoutRoutes = require('./logout')

router.get('/', (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
})

router.use('/login', loginRoutes)
router.use('/register', registerRoutes)
router.use('/logout', logoutRoutes)

module.exports = router;