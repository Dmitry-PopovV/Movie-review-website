const mongoose = require('mongoose');

async function getRevById(req, id) {
    const rev = await req.models.reviews.aggregate([
        {
            $match: {
                _id: mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup: {
                from: "films",
                localField: "film",
                foreignField: "_id",
                as: "film"
            }
        }
    ]);
    let resArr = [rev[0].film[0][req.session.lang+"_name"], rev[0].text, rev[0].rating, rev[0]._id];
    return resArr;
};

module.exports = getRevById;
