const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const serverStart = require('./lib/services/serverStart.js');
const staticRouter = require('./lib/routers/staticRouter/staticRouter');
const TIRouter = require('./lib/routers/TIRouter/TIRouter');
const errorRouter = require('./lib/routers/errorRouter/errorRouter');
const setStandartSession = require('./lib/midleware/setStandartSession');

const app = express();

serverStart()
    .then((res) => {
        const addModelsToReq = res.msRes;
        app
            .use(bodyParser.json())
            .set('view engine', 'ejs')
            .use(session({ secret: res.cookieSecret, cookie: { maxAge: 36000000 }, resave: false, saveUninitialized: true}))
            .use('/', setStandartSession())
            .use('/', addModelsToReq())
            .use('/', TIRouter)
            .use('/', staticRouter)
            .use('/', errorRouter);

        app.listen(3000);
    });

