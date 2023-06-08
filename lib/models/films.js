const mongoose = require('mongoose');

const filmsSchema = mongoose.Schema({
    ru_name: String,
    en_name: String,
    relase: Number
});

const films = mongoose.model('films', filmsSchema);

module.exports = films;
