const {Videogame} = require("./../../db")


const findVideogamesFromDb = async () => {
    const allVideogames =  await Videogame.findAll()
    return allVideogames
}


module.exports = {findVideogamesFromDb}