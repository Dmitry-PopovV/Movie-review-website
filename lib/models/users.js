const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: String,
    password: String,
    films: [{ type: mongoose.Schema.Types.ObjectId, ref: 'films' }]
});

const users = mongoose.model('users', usersSchema);

module.exports = users;
