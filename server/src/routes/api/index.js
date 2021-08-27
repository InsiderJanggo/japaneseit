const { Router } = require("express");

const router = Router();
const kanjiRoutes = require('./kanji/index')
const usersRoutes = require('./user/index')

router.use('/kanji', kanjiRoutes)
router.use('/user', usersRoutes)

module.exports = router;