const expVal = require('express-validator');
const isRevExist = require('../../../services/isRevExist');

function chooseEditRevMidleware(req, res) {
    const valRes = expVal.validationResult(req);
    if (req.params.revID == "new") {
        req.session.selected.rev = null;
        res.redirect('/reviewEdit');
    } else if (valRes.isEmpty() && isRevExist(req, req.params.revID)) {
        req.session.selected.rev = req.params.revID;
        res.redirect('/reviewEdit');
    } else {
        res.send("Review not found");
    }
}

module.exports = chooseEditRevMidleware;