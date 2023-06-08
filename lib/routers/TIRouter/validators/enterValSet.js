const expVal = require('express-validator');
const validResMidleware = require('../../../midleware/validResMidleware');

function enterValSet() {
    return [
        expVal.body("login").notEmpty().withMessage('login required'),
        expVal.body("password").notEmpty().withMessage('password required'),
        validResMidleware()
    ];
}

module.exports = enterValSet;