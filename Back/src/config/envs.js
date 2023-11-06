require("dotenv").config();



module.exports = {
    USER_DB:process.env.DB_USER,
    PASSWORD_DB: process.env.DB_PASSWORD,
    HOST_DB: process.env.DB_HOST,
    API_KEY: process.env.API_KEY
}