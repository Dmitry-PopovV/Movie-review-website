const expVal = require('express-validator');
const translateValMessage = require('../services/translateValMessage');
const newUser = require('../services/newUser');

function registrationMidleware() {
    return (req, res) => {
        const valRes = expVal.validationResult(req);
        if (!valRes.isEmpty()) {
            res.status(400).send(translateValMessage(req, valRes.errors[0]['msg']));
        } else {
            newUser(req).then((errBool)=>{
                if(errBool == true) {
                    req.session.user = req.body.login;
                    res.status(200).send('user is created');
                } else {
                    res.sendStatus(500);
                }
            });
        }
    };
}

module.exports = registrationMidleware;