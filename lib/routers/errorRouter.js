const express = require('express');
const errorRouter = express.Router();

errorRouter
    .use('/*/user', (req, res) => {
        res.redirect('/'+ req.session.lang +'/registration');
    });

module.exports = errorRouter;
