const bcrypt = require('bcrypt');

const saltRounds = 10;

async function newUser(req) {
    const hash = await bcrypt.hash(req.body.password, saltRounds);

    const newUser = new req.models.users({
        name: req.body.login,
        password: hash,
        films: []
    });

    await newUser.save();

    return true;
}

module.exports = newUser;
