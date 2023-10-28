const {Router} = require("express")

const videogames = Router()

videogames.get("/", (request, response)=>{
    response.send("Ruta para solicitiar lista de videojuegos")
})
videogames.get("/:idVideogame", (request, response)=>{
    response.send("Pide videojuegos por id")
})
videogames.get("/name?=:name",(request, response)=> {
    response.send("Videojuegos por nombre")
})
videogames.post("/",(request, response)=>{
    response.send("Ruta para agregar videojuegos a la base de datos")
})

module.exports = videogames