const expVal = require('express-validator');
const passwordsMatchingValidator = require('./passwordsMatchingValidator');
const validResMidleware = require('../../../midleware/validResMidleware');

function registrationValSet() {
    return [
        expVal.body("login").notEmpty().withMessage('login required'),
        expVal.body("password").notEmpty().withMessage('password required'),
        expVal.body("password2").notEmpty().withMessage('password\'s repeat required'),
        expVal.body("password2").custom(passwordsMatchingValidator()).withMessage('passwords not match'),
        validResMidleware()
    ];
}

module.exports = registrationValSet;