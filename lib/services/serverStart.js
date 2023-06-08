require('dotenv').config({ path: './secrets/.env' });
const mongooseStart = require('./mongooseStart');

async function serverStart() {
    const msRes = await mongooseStart(process.env.mongooseString);
    const cookieSecret = process.env.cookieSecret;

    return {msRes, cookieSecret};
}

module.exports = serverStart;
