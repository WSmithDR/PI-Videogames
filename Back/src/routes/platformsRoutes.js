const {Router} = require("express")
const { getPlatforms } = require("../handlers/getPlatforms")

const genres = Router()

genres.get("/", getPlatforms)

module.exports = genres