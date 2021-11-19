require('dotenv').config();
const express = require('express');
const app = express();

let defaultController = require('./controllers/defaultController')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', defaultController);

app.get('/default', (req, res) => {

    let configs = {
        enviroment: process.env.NODE_ENV,
        server: process.env.SERVER
    }


    res.send(configs)

})

module.exports = app;