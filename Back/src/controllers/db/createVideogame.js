const {Videogame} = require("./../../db")

const createVideogame = async (
    name, 
    description, 
    platforms, 
    image, 
    releaseDate, 
    rating
) => {
    await Videogame.findOrCreate({
        where:{
        name, 
        description, 
        platforms, 
        image, 
        releaseDate, 
        rating 
    }})

    const allVideogames = await Videogame.findAll()

    return allVideogames
}

module.exports = {createVideogame}