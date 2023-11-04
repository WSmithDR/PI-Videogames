const {Videogame, Genre, Platform} = require("./../../db")

const createVideogame = async (
    name, 
    description, 
    platforms, 
    image, 
    releaseDate, 
    rating,
    genres
) => {  

    const newVideogame = await Videogame.create({
        name, 
        description, 
        image, 
        releaseDate, 
        rating 
    })

    genres.forEach(async (genre) => {
        const found = await Genre.findAll({
            where:{
                name: genre
            }
        })
        await newVideogame.addGenre(found)
    })

    platforms.forEach(async (platform) => {
        const found = await Platform.findAll({
            where: {
                name: platform
            }
        })
        await newVideogame.addPlatform(found)
    })
    
    const allVideogames = await Videogame.findAll()

    return allVideogames
}

module.exports = {createVideogame}