function headGen(req, rightPart) {
    return `
<div class="row gy-2">
    <div class="col-auto" id="lang">
        <img src="/lang.png" class="langImg">
    </div>
    <div class="col-auto home" id="home">Название</div>
    <div class="col"></div>
    <div class="col-auto">
        ${rightPart}
    </div>
</div>`
};

module.exports = headGen;
