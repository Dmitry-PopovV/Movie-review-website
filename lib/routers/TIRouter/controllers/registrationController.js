const translateValMessage = require('../../../services/translateValMessage');
const isUserExist = require('../../../services/isUserExist');
const newUser = require('../../../services/newUser');

async function registrationMidleware(req, res) {
    if (await isUserExist(req, req.body.login)) {
        res.status(400).send(translateValMessage(req, 'this login in use'));
    } else {
        newUser(req).then((errBool) => {
            if (errBool == true) {
                req.session.user = req.body.login;
                res.status(200).send('user is created');
            } else {
                res.sendStatus(500);
            }
        });
    }
}

module.exports = registrationMidleware;