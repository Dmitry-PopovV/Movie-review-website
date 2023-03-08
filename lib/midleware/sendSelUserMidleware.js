function sendSelUserMidleware() {
    return (req, res) => {
		if (req.session.selected.user == null) {
			res.json(["@error"]);
		} else {
			res.json([req.session.selected.user]);
		}
	};
}

module.exports = sendSelUserMidleware;