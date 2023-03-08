const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

async function mongooseStart(mongooseString) {
    await mongoose.connect(mongooseString);

    const filmsSchema = mongoose.Schema({
        ru_name: String,
        en_name: String,
        relase: Number
    });

    const usersSchema = mongoose.Schema({
        name: String,
        password: String,
        films: [{ type: mongoose.Schema.Types.ObjectId, ref: 'films' }]
    });

    const reviewsSchema = mongoose.Schema({
        film: { type: mongoose.Schema.Types.ObjectId, ref: 'films' },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
        rating: Number,
        text: String

    }, { timestamps: true });

    const films = mongoose.model('films', filmsSchema);
    const users = mongoose.model('users', usersSchema);
    const reviews = mongoose.model('reviews', reviewsSchema);

    return function addModelsToReq() {
        return (req, res, next) => {
            req.models = {films, users, reviews};
            next();
        };
    };
};

module.exports = mongooseStart;
