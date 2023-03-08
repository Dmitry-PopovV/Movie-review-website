async function getRevList(req, userName) {
    const res = await req.models.users.findOne({ name: userName });
    const revList = await req.models.reviews.aggregate([
        {
            $match: {
                film: {
                    $in: res.films
                }
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
    let resArr = [];
    revList.forEach((el) => {
        resArr.push([el.film[0][req.session.lang+"_name"], el.text, el.rating, el._id]);
    });
    return resArr;
};

module.exports = getRevList;