const express = require('express');
const session = require('express-session');
const registrationRouter = require('./lib/routers/registrationRouter');
const enterRouter = require('./lib/routers/enterRouter');
const serverStart = require('./lib/services/serverStart');
const staticRouter = require('./lib/routers/staticRouter');
const rootRouter = require('./lib/routers/rootRouter');
const errorRouter = require('./lib/routers/errorRouter');
const setStandartSession = require('./lib/midleware/setStandartSession');

const app = express();

serverStart()
    .then((res) => {
        const addModelsToReq = res.msRes;
        app
            .use(session({ secret: res.cookieSecret, cookie: { maxAge: 36000000 }, resave: false, saveUninitialized: true}))
            .use('/', setStandartSession())
            .use('/', addModelsToReq())
            .use('/', rootRouter)
            .use('/', registrationRouter)
            .use('/', enterRouter)
            .use('/', staticRouter)
            .use('/', errorRouter);

        app.listen(3000);
    });

