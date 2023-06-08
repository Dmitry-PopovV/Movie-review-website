const isUserExist = require('../../../services/isUserExist');

function chooseUserMidleware(req, res) {
	if (isUserExist(req, req.params.userName)) {
		req.session.selected.user = req.params.userName;
		res.redirect('/user');
	} else {
		res.send("User not found");
	}
}

module.exports = chooseUserMidleware;