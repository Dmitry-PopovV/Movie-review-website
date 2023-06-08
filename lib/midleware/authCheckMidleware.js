function authCheckMidleware() {
    return (req, res, next)=>{
        if(req.session.user == null){
            next('router');
        } else {
            next();
        }
    };
}

module.exports = authCheckMidleware;