const mongoose = require('mongoose');

const reviewsSchema = mongoose.Schema({
    film: { type: mongoose.Schema.Types.ObjectId, ref: 'films' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    rating: Number,
    text: String
}, { timestamps: true });

const reviews = mongoose.model('reviews', reviewsSchema);

module.exports = reviews;