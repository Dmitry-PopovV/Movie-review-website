const translateHtml = require('../services/translateHtml');

function unlogBtnGen(req) {
    return `
<div class="row gx-2">
    <div class="col-auto" id="profile_img"><img src="/standartUser.png" class="img-fluid userImg rounded-circle"></div>
    <div class="col-auto" id="unlog"><button class="btn btn-light">${translateHtml(req, "Unlog")}</button></div>
</div>`
};

module.exports = unlogBtnGen;