
async function createOrUpdateRev(req) {
    const filmNameField = req.session.lang + "_name";
    const filmObj = await req.models.films.findOne({ [filmNameField]: req.body.name });
    const userObj = await req.models.users.findOne({ name: req.session.user});
    if (filmObj !== null) {
        const revObj = await req.models.reviews.findOne({user: userObj._id, film: filmObj._id});
        if (revObj !== null) {
            revObj.film = filmObj._id;
            revObj.text = req.body.text;
            revObj.rating = req.body.rating;
            await revObj.save();
            return true;
        } else {
            const newRev = new req.models.reviews({
                film: filmObj._id,
                text: req.body.text,
                rating: req.body.rating,
                user: userObj._id
            })
            await newRev.save();
            userObj.films.push(filmObj._id);
            await userObj.save();
            return true;
        }
    } else {
        return false;
    }

}

module.exports = createOrUpdateRev;
