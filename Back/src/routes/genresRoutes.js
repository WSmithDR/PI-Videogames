const {Router} = require("express")
const { getGenres } = require("../handlers/getGenres")

const genres = Router()

genres.get("/", getGenres)

module.exports = genres