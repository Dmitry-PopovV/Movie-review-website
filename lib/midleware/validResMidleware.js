const expVal = require('express-validator');
const translateValMessage = require('../services/translateValMessage');

function validResMidleware() {
    return (req, res, next)=>{
        const valRes = expVal.validationResult(req);
        if(!valRes.isEmpty()){
            res.status(400).send(translateValMessage(req, valRes.errors[0]['msg']));
        } else {
            next();
        }
    };
}

module.exports = validResMidleware;