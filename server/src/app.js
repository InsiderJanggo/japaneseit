const express = require("express");
const helmet = require("helmet");
const { NotFound, errorHandler } = require("./utils/middlewares");
const cors = require('cors')
const app = express();
var session = require('express-session')
const morgan = require('morgan')
var fileUpload = require('express-fileupload')
require('dotenv').config();

const corsOptions = {
    origin: ["http://localhost:3000", "http://172.18.96.1:3000", "http://192.168.100.229:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
}

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'))

app.use(session({
    secret: process.env.TOKEN,
    resave: false,
    saveUninitialized: true,
}))
app.use(fileUpload());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World 🍕'
    })
})

require('./routes/index')(app);

app.use(errorHandler)
app.use(NotFound);

module.exports = app;