require('dotenv/config')
module.exports = {
    serviceID : process.env.serviceID,
    accountSID : process.env.accountSID,
    authToken : process.env.authToken,
    MONGO_URL : process.env.mongo_URL
}