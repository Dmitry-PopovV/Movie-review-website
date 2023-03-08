const express = require('express');
const bodyParser = require('body-parser');
const expVal = require('express-validator');
const recomendationsMidleware = require('../midleware/recomendationsMidleware');
const langMidleware = require('../midleware/langMidleware');
const sendRevMidleware = require('../midleware/sendRevMidleware');
const sendSelUserMidleware = require('../midleware/sendSelUserMidleware');
const chooseUserMidleware = require('../midleware/chooseUserMidleware');
const sendUserNameMidleware = require('../midleware/sendUserNameMidleware');
const sendUserRevMidleware = require('../midleware/sendUserRevMidleware');
const chooseEditRevMidleware = require('../midleware/chooseEditRevMidleware');
const sendSelRevMidleware = require('../midleware/sendSelRevMidleware');
const unlogMidleware = require('../midleware/unlogMidleware');
const updateRevMidleware = require('../midleware/updateRevMidleware');
const rootRouter = express.Router();

rootRouter
	.use(bodyParser.json())
	.get('/rec', recomendationsMidleware())
	.post('/lang', langMidleware())
	.get('/rev', sendRevMidleware())
	.get('/selUser', sendSelUserMidleware())
	.get('/user/:userName', chooseUserMidleware())
	.get('/myName', sendUserNameMidleware())
	.get('/myRev', sendUserRevMidleware())
	.get('/editRev/:revID',
		expVal.param("revID").isMongoId().withMessage('invalid revID'),
		chooseEditRevMidleware())
	.get('/selRev', sendSelRevMidleware())
	.get('/unlog', unlogMidleware())
	.post('/updateRev',
		expVal.body("name").notEmpty().withMessage('name required'),
		expVal.body("text").notEmpty().withMessage('text required'),
		expVal.body("rating").notEmpty().withMessage('rating required'),
		updateRevMidleware());

module.exports = rootRouter;