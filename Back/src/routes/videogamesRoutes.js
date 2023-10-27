const {Router} = require("express")
const getVideogames = require("../controllers/getVideogames")
const getVideogameById = require("../controllers/getVideoGameById")

const videogames = Router()

videogames.get("/", getVideogames)
videogames.get("/:idVideogame", getVideogameById)

module.exports = videogames