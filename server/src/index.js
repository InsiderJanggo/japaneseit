require('dotenv').config();
const app = require("./app");
var db = require('./utils/database');
const logger = require('./utils/logger');

let port = process.env.PORT || 5000;

db.connect((err) => {
    if(err) throw err;
    console.log(`Connected to ${process.env.DB}`);
})

app.listen(port, (err) => {
    if(err) throw err;
    logger.info(`Listening to http://localhost:${port}`);
})