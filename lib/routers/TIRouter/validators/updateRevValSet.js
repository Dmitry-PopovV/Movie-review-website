const expVal = require('express-validator');

function updateRevValSet() {
    return [
        expVal.body("name").notEmpty().withMessage('name required'),
		expVal.body("text").notEmpty().withMessage('text required'),
		expVal.body("rating").notEmpty().withMessage('rating required')
    ];
}

module.exports = updateRevValSet;