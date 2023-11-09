const {Router} = require("express")
const { getVideogames } = require("../handlers/getVideogames")
const { getVideogameById } = require("../handlers/getVideogameById")
const { postVideogame } = require("../handlers/postVideogame")
const { deleteVideogame } = require("../handlers/deleteVideogame")

const videogames = Router()

videogames.get("/", getVideogames)

videogames.get("/:idVideogame", getVideogameById)

videogames.post("/", postVideogame)

videogames.delete("/:id", deleteVideogame)

module.exports = videogames