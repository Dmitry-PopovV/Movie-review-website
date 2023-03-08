const isUserExist = require('../services/isUserExist');

function chooseUserMidleware() {
    return (req, res) => {
		if (isUserExist(req, req.params.userName)) {
			req.session.selected.user = req.params.userName;
			res.redirect('/' + req.session.lang + '/user');
		} else {
			res.send("User not found");
		}
	};
}

module.exports = chooseUserMidleware;