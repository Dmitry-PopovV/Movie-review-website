const express = require('express');
const publicRouter = express.Router();

publicRouter
    .use(express.static('img'))
    .use('/en', express.static('pages/public/_generic'))
    .use('/ru', express.static('pages/public/_generic'))
    .use(express.static('pages/public'));

module.exports = publicRouter;