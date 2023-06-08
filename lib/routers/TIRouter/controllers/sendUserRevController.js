const getRevList = require('../../../services/getRevList');

function sendUserRevMidleware(req, res) {
	if (req.session.user == null) {
		res.json([]);
	} else {
		getRevList(req, req.session.user)
			.then((list) => {
				res.json(list);
			});
	}
}

module.exports = sendUserRevMidleware;