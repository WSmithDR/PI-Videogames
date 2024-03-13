const { findVideogamesByIdFromDb } = require("../controllers/db/findVideogameByIdFromDb")
const { removeVideogame } = require("../controllers/db/removeVideogame")


const deleteVideogame = (request, response) => {
    try {
        const id = request.params
        const videogames = removeVideogame(id)
        return response.status(200).json(videogames)
    } catch (error) {
        return error.message        
    }
}

module.exports = {
    deleteVideogame
}