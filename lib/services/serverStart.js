const fs = require('fs');
const mongooseStart = require('../services/mongooseStart');

async function serverStart() {
    const mongooseString = fs.readFileSync('././secrets/mongooseString.txt', 'utf8');

    const msRes = await mongooseStart(mongooseString);

    const cookieSecret = fs.readFileSync('././secrets/cookieSecret.txt', 'utf8');

    return {msRes, cookieSecret};
}

module.exports = serverStart;
