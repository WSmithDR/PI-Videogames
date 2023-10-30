const {Videogame} = require("./../../db")

const {Op} = require("sequelize")

const findVideogameByNameFromDb = async (name) => {
    return await Videogame.findAll({
        where:{
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    })
}

module.exports = {
    findVideogameByNameFromDb,
}