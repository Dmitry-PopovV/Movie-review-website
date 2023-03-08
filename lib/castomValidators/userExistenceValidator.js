const isUserExist = require('../services/isUserExist');

function userExistenceValidator() {
    return (val, {req})=>{
        return isUserExist(req, req.body.login).then((res)=>{return res ? Promise.resolve() : Promise.reject();});
    };
}

module.exports = userExistenceValidator;