require('dotenv').config();
const express = require('express');
const app = express();

let defaultController = require('./controllers/defaultController')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', defaultController);

module.exports = app;
