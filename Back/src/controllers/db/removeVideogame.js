const { findVideogamesByIdFromDb } = require("./findVideogameByIdFromDb")
const {Videogame} = require("./../../db")



const removeVideogame = async (id) => {
    const foundVideogame = findVideogamesByIdFromDb(id)
    const videogames = await Videogame.destroy({
        wh
    })
    return videogames
}

module.exports = {removeVideogame}