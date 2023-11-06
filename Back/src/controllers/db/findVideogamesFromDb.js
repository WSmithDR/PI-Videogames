const {Videogame, Genre, Platform} = require("./../../db")


const findVideogamesFromDb = async () => {
    const allVideogames =  await Videogame.findAll({
        include:[
            {
                model:Genre,
                as: "genres"
            },
            {
                model: Platform,
                as:"platforms"
            }
        ]
    })
    return allVideogames
}


module.exports = {findVideogamesFromDb}