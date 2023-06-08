const express = require('express');
const errorRouter = express.Router();

errorRouter
    .use('/user', (req, res) => {
        res.redirect('/registration');
    })
    .use('/', (req, res) => {
        res.redirect('/');
    });

module.exports = errorRouter;
