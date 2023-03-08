const bcrypt = require('bcrypt');

async function isPasswordRight(req) {
    const res = await req.models.users.findOne({name: req.body.login})
    return await bcrypt.compare(req.body.password, res.password);
};

module.exports = isPasswordRight;