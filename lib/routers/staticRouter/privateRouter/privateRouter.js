const express = require('express');
const authCheckMidleware = require('../../../midleware/authCheckMidleware');
const headGen = require('../../../htmlGen/headGen');
const privateHeadBtnGen = require('../../../htmlGen/privateHeadBtnGen');
const translateHtml = require('../../../services/translateHtml');
const unlogBtnGen = require('../../../htmlGen/unlogBtnGen');
const privateRouter = express.Router();

privateRouter
    .use('/', authCheckMidleware())
    .use('/', express.static('pages/private/_generic'))
    .get('/reviewEdit', (req, res) => {
        res.render('private/reviewEdit/index', { head: headGen(req, privateHeadBtnGen(req)), filmName: translateHtml(req, "Film name"), review: translateHtml(req, "Review"), rating: translateHtml(req, "Rating"), confirm: translateHtml(req, "Confirm") })
      })
    .get('/user', (req, res) => {
        res.render('private/user/index', { head: headGen(req, privateHeadBtnGen(req)) })
      })
    .get('/my', (req, res) => {
        res.render('private/my/index', { head: headGen(req, unlogBtnGen(req)), newRev: translateHtml(req, "New review") })
      });

module.exports = privateRouter;