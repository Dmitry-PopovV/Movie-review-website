function setStandartSession() {
    return (req, res, next)=>{
        if(req.session.lang == null)
            req.session.lang = "en";
        if(req.session.selected == null)
            req.session.selected = {};
        next();
    };
}

module.exports = setStandartSession;
