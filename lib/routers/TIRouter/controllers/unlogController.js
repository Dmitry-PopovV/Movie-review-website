function unlogMidleware(req, res) {
	req.session.user = null;
	req.session.selected = {};
	res.redirect('/');
}

module.exports = unlogMidleware;