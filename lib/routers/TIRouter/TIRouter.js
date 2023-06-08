const express = require('express');
const expVal = require('express-validator');
const recomendationsController = require('./controllers/recomendationsController');
const langController = require('./controllers/langController');
const sendUserLangController = require('./controllers/sendUserLangController');
const sendRevController = require('./controllers/sendRevController');
const sendSelUserController = require('./controllers/sendSelUserController');
const chooseUserController = require('./controllers/chooseUserController');
const sendUserNameController = require('./controllers/sendUserNameController');
const sendUserRevController = require('./controllers/sendUserRevController');
const chooseEditRevController = require('./controllers/chooseEditRevController');
const sendSelRevController = require('./controllers/sendSelRevController');
const unlogController = require('./controllers/unlogController');
const updateRevController = require('./controllers/updateRevController');
const updateRevValSet = require('./validators/updateRevValSet');
const registrationController = require('./controllers/registrationController');
const registrationValSet = require('./validators/registrationValSet');
const enterController = require('./controllers/enterController');
const enterValSet = require('./validators/enterValSet');
const rootRouter = express.Router();

rootRouter
	.get('/rec', recomendationsController)
	.get('/lang', langController)
	.get('/myLang', sendUserLangController)
	.get('/rev', sendRevController)
	.get('/selUser', sendSelUserController)
	.get('/users/:userName', chooseUserController)
	.get('/myName', sendUserNameController)
	.get('/myRev', sendUserRevController)
	.get('/editRev/:revID',
		expVal.param("revID").isMongoId().withMessage('invalid revID'),
		chooseEditRevController)
	.get('/selRev', sendSelRevController)
	.get('/unlog', unlogController)
	.post('/updateRev',
		updateRevValSet(),
		updateRevController)
	.post('/reg',
		registrationValSet(),
		registrationController)
	.post('/enter',
		enterValSet(),
		enterController);

module.exports = rootRouter;