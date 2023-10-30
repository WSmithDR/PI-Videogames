const {Videogame, Genre} = require("./../../db")


const findVideogamesFromDb = async () => {
    const allVideogames =  await Videogame.findAll({
        include:{
            model:Genre
        }
    })
    return allVideogames
}


module.exports = {findVideogamesFromDb}