const express = require('express');
const headGen = require('../../../htmlGen/headGen');
const publicRouter = express.Router();

publicRouter
    .use(express.static('img'))
    .use('/', express.static('pages/public/_generic'))
    .use('/js', express.static('pages/modules/js'))
    .use('/css', express.static('pages/modules/css'))
    .get('/registration', (req, res) => {
        res.render('public/registration/index', { head: headGen(req, '') });
    })
    .get('/enter', (req, res) => {
        res.render('public/enter/index', { head: headGen(req, '') });
    });

module.exports = publicRouter;