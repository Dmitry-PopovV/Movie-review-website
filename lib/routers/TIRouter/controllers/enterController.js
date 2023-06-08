const translateValMessage = require('../../../services/translateValMessage');
const isUserExist = require('../../../services/isUserExist');
const isPasswordRight = require('../../../services/isPasswordRight');

async function enterMidleware(req, res) {
    if (!await isUserExist(req, req.body.login)) {
        res.status(400).send(translateValMessage(req, 'user not found'));
    } else if (!await isPasswordRight(req)) {
        res.status(400).send(translateValMessage(req, 'wrong password'));
    } else {
        req.session.user = req.body.login;
        res.status(200).send('enter success');
    }
}

module.exports = enterMidleware;