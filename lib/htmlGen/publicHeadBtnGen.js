const translateHtml = require('../services/translateHtml');

function publicHeadBtnGen(req) {
    return `
<div class="row gx-2">
    <div class="col-auto" id="enter"><button class="btn btn-light">${translateHtml(req, "Log in")}</button></div>
    <div class="col-auto" id="registration"><button class="btn btn-light">${translateHtml(req, "Join us")}</button></div>
</div>`
};

module.exports = publicHeadBtnGen;