const mongoose = require('mongoose');
const films = require('../models/films');
const users = require('../models/users');
const reviews = require('../models/reviews');
mongoose.set('strictQuery', true);

async function mongooseStart(mongooseString) {
    await mongoose.connect(mongooseString);

    return function addModelsToReq() {
        return (req, res, next) => {
            req.models = {films, users, reviews};
            next();
        };
    };
};

module.exports = mongooseStart;
