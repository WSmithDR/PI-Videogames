const {Videogame} = require("./../../db")

const findVideogamesByIdFromDb = async (id) => {
    const videogame = await Videogame.findByPk(id)
    console.log(videogame)
    return videogame
}

module.exports = {findVideogamesByIdFromDb}