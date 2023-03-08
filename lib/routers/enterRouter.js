const express = require('express');
const bodyParser = require('body-parser');
const expVal = require('express-validator');
const rightPasswordValidator = require('../castomValidators/rightPasswordValidator');
const enterMidleware = require('../midleware/enterMidleware');
const userExistenceValidator = require('../castomValidators/userExistenceValidator');
const enterRouter = express.Router();

enterRouter
    .use(bodyParser.json())
    .post('/enter',
    expVal.body("login").notEmpty().withMessage('login required'),
    expVal.body("login").custom(userExistenceValidator()).withMessage('user not found'),
    expVal.body("password").notEmpty().withMessage('password required'),
    expVal.body("password").custom(rightPasswordValidator()).withMessage('wrong password'),
    enterMidleware());

module.exports = enterRouter;
