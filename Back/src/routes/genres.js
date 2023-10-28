const {Router} = require("express")

const genres = Router()

genres.get("/", (request, response)=>{
    response.send("Ruta para solicitiar los gèneros de videojuegos.")
})

module.exports = genres