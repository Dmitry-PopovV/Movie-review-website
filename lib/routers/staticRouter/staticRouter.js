const express = require('express');
const staticRouter = express.Router();
const publicRouter = require('./publicRouter/publicRouter');
const privateRouter = require('./privateRouter/privateRouter');
const headGen = require('../../htmlGen/headGen');
const publicHeadBtnGen = require('../../htmlGen/publicHeadBtnGen');
const privateHeadBtnGen = require('../../htmlGen/privateHeadBtnGen');

staticRouter
	.use(privateRouter)
	.use(publicRouter)
	.get('/', (req, res) => {
        res.render('public/index', { head: headGen(req, (req.session.user == null ? publicHeadBtnGen(req) : privateHeadBtnGen(req))) })
      });



module.exports = staticRouter;