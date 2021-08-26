const express = require("express");
const helmet = require("helmet");
const { NotFound, errorHandler } = require("./utils/middlewares");
const cors = require('cors')
const app = express();
const morgan = require('morgan')

const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.json({
        message: 'Hello World 🍕'
    })
})

require('./routes/index')(app);

app.use(errorHandler)
app.use(NotFound);

module.exports = app;