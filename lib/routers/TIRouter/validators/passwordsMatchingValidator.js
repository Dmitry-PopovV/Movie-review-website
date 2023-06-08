function passwordsMatchingValidator() {
    return (val, {req})=>{
        if(val == req.body.password) {
            return true;
        } else {
            return false;
        }
    };
}

module.exports = passwordsMatchingValidator;