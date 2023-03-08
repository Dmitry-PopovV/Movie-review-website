const expVal = require('express-validator');
const translateValMessage = require('../services/translateValMessage');


function enterMidleware() {
    return (req, res) => {
        const valRes = expVal.validationResult(req);
        if (!valRes.isEmpty()) {
            res.status(400).send(translateValMessage(req, valRes.errors[0]['msg']));
        } else {
            req.session.user = req.body.login;
            res.status(200).send('enter success');
        }
    };
}

module.exports = enterMidleware;