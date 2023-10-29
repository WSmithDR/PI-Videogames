const {Videogame} = require("./../../db")

const checkVideogameExistenceInDb = async(name) => {
    const pendejo = await Videogame.findOne({
        where:{
            name
        }
    })
    console.log("probrando el exists: ", pendejo)
    return pendejo ? true: false
}

module.exports = {
    checkVideogameExistenceInDb
}