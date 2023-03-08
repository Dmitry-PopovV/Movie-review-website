const expVal = require('express-validator');
const createOrUpdateRev = require('../services/createOrUpdateRev');
const translateValMessage = require('../services/translateValMessage');

function updateRevMidleware() {
    return (req, res) => {
        const valRes = expVal.validationResult(req);
        if (!valRes.isEmpty()) {
            res.status(400).send(translateValMessage(req, valRes.errors[0]['msg']));
        } else {
            createOrUpdateRev(req).then((errBool)=>{
                if(errBool == true) {
                    res.status(200).send('Review update');
                } else {
                    res.status(400).send(translateValMessage(req, 'Film not found'));
                }
            });
        }
    };
}

module.exports = updateRevMidleware;