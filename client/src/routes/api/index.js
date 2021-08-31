const { Router } = require("express");

const router = Router();
const kanjiRoutes = require('./kanji/index')
const usersRoutes = require('./user/index')
const kotobaRoutes = require('./kotoba/index')

router.use('/kanji', kanjiRoutes)
router.use('/user', usersRoutes)
router.use('/kotoba', kotobaRoutes)

module.exports = router;