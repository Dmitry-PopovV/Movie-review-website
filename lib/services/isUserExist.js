async function isUserExist(req, user) {
    const res = await req.models.users.findOne({name: user})
    if(res !== null) {
        return true;
    } else {
        return false;
    }
};

module.exports = isUserExist;