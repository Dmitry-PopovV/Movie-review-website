const isPasswordRight = require('../services/isPasswordRight');

function rightPasswordValidator() {
    return (val, {req})=>{
        return isPasswordRight(req).then((res)=>{return res ? Promise.resolve() : Promise.reject();});
    };
}

module.exports = rightPasswordValidator;