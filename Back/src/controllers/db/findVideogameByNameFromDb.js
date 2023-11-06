const {Videogame, Genre, Platform} = require("./../../db")

const {Op} = require("sequelize")

const findVideogameByNameFromDb = async (name) => {
    return await Videogame.findAll({
        where:{
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        include: [
            {
                model: Genre,
                as: "genres"
            },
            {
                model: Platform,
                as: "platforms"
            }
        ]
    })
}

module.exports = {
    findVideogameByNameFromDb,
}