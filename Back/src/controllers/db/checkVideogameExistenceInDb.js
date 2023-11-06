const {Videogame} = require("./../../db")

const checkVideogameExistenceInDb = async(name) => {
    const check = await Videogame.findOne({
        where:{
            name
        }
    })
    return check ? true: false
}

module.exports = {
    checkVideogameExistenceInDb
}