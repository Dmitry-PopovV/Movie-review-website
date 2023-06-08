const getRevById = require('../../../services/getRevById');

function sendSelRevMidleware(req, res) {
	if (req.session.selected.rev == null) {
		res.json(['', '', '']);
	} else {
		getRevById(req, req.session.selected.rev)
			.then((list) => {
				res.json(list);
			});
	}
}

module.exports = sendSelRevMidleware;