const express = require('express');
const privateRouter = express.Router();

privateRouter
    .use('/', (req, res, next)=>{
        if(req.session.user == null){
            next('router');
        } else {
            next();
        }
    })
    .use('/en', express.static('pages/private/_generic'))
    .use('/ru', express.static('pages/private/_generic'))
    .use(express.static('pages/private'));

module.exports = privateRouter;