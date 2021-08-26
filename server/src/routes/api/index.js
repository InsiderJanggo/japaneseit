const { Router } = require("express");

const router = Router();
const kanjiRoutes = require('./kanji/index')

router.use('/kanji', kanjiRoutes)

module.exports = router;