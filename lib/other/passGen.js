const bcrypt = require('bcrypt');

const saltRounds = 10;

bcrypt.hash("password2", saltRounds).then(function (hash) {console.log(hash)});
