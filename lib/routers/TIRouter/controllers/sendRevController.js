const getRevList = require('../../../services/getRevList');

function sendRevMidleware(req, res) {
	if (req.session.selected.user == null) {
		res.json([]);
	} else {
		getRevList(req, req.session.selected.user)
			.then((list) => {
				res.json(list);
			});
	}
}

module.exports = sendRevMidleware;