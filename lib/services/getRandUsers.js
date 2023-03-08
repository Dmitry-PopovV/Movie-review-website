async function getRandUsers(req) {
    const res = await req.models.users.aggregate([ { $project: { _id: 0, name: 1}}, { $sample: { size: 6 } } ]);
    let resArr = [];
    res.forEach((el) => {
        resArr.push(["/standartUser.png", el["name"]]);
    });
    return resArr;
};

module.exports = getRandUsers;