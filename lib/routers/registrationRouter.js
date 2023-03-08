const express = require('express');
const bodyParser = require('body-parser');
const expVal = require('express-validator');
const registrationRouter = express.Router();
const userExistenceValidator = require('../castomValidators/userExistenceValidator');
const passwordsMatchingValidator = require('../castomValidators/passwordsMatchingValidator');
const registrationMidleware = require('../midleware/registrationMidleware');

registrationRouter
    .use(bodyParser.json())
    .post('/reg',
    expVal.body("login").notEmpty().withMessage('login required'),
    expVal.body("login").not().custom(userExistenceValidator()).withMessage('this login in use'),
    expVal.body("password").notEmpty().withMessage('password required'),
    expVal.body("password2").notEmpty().withMessage('password\'s repeat required'),
    expVal.body("password2").custom(passwordsMatchingValidator()).withMessage('passwords not match'),
    registrationMidleware());

module.exports = registrationRouter;
