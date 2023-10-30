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

    const newVideogame = await Videogame.create({
        name, 
        description, 
        platforms, 
        image, 
        releaseDate, 
        rating 
    })

    genres.forEach(async (genre) => {
        let find = await Genre.findAll({
            where:{
                name: genre
            }
        })
        await newVideogame.addGenre(find)
    })
    
    const allVideogames = await Videogame.findAll()

    return allVideogames
}

module.exports = {createVideogame}