const translateHtml = require('../services/translateHtml');

function privateHeadBtnGen(req) {
    return `
<div class="row gx-2" id="profile">
    <div class="col-auto" id="profile_img"><img src="/standartUser.png" class="img-fluid userImg rounded-circle"></div>
    <div class="col-auto"><button class="btn btn-light">${translateHtml(req, "My profile")}</button></div>
</div>`
};

module.exports = privateHeadBtnGen;