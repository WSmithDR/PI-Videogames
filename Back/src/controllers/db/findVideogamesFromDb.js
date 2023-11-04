const {Videogame, Genre, Platform} = require("./../../db")


const findVideogamesFromDb = async () => {
    const allVideogames =  await Videogame.findAll({
        include:[
            {
                model:Genre,
            },
            {
                model: Platform
            }
        ]
    })
    return allVideogames
}


module.exports = {findVideogamesFromDb}