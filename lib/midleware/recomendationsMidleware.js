const getRandUsers = require('../services/getRandUsers');

function recomendationsMidleware() {
    return (req, res) => {
		getRandUsers(req)
			.then((resArr) => {
				res.json(resArr);
			})

	};
}

module.exports = recomendationsMidleware;