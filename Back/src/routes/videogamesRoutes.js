const {Router} = require("express")
const { getVideogames } = require("../handlers/getVideogames")
const { getVideogameById } = require("../handlers/getVideogameById")
const { postVideogame } = require("../handlers/postVideogame")

const videogames = Router()

videogames.get("/", getVideogames)

videogames.get("/:idVideogame", getVideogameById)

videogames.post("/", postVideogame)

module.exports = videogames