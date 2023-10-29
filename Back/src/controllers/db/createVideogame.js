const {Videogame, Genre} = require("./../../db")

const createVideogame = async (
    name, 
    description, 
    platforms, 
    image, 
    releaseDate, 
    rating,
    genres
) => {  
    const info = await Genre.findAll({
        where:{
            name: genres
        }
    })

    const newVideogame = await Videogame.create({
        name, 
        description, 
        platforms, 
        image, 
        releaseDate, 
        rating 
    })

    await newVideogame.setGenres(info)

    const allVideogames = await Videogame.findAll()

    return allVideogames
}

module.exports = {createVideogame}