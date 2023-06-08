function sendUserNameMidleware(req, res) {
	if (req.session.user == null) {
		res.json(["@error"]);
	} else {
		res.json([req.session.user]);
	}
}

module.exports = sendUserNameMidleware;