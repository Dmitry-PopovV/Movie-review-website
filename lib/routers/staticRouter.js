const express = require('express');
const staticRouter = express.Router();
const publicRouter = require('./publicRouter');
const privateRouter = require('./privateRouter');

staticRouter
	.get('/', (req, res) => {
		res.redirect('/'+req.session.lang);
	})
	.use(privateRouter)
	.use(publicRouter);



module.exports = staticRouter;