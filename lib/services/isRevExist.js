async function isRevExist(req, id) {
    const res = await req.models.reviews.findById(id);
    if(res !== null) {
        return true;
    } else {
        return false;
    }
};

module.exports = isRevExist;