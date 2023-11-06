const { searchVideogameByIdFromApi } = require("../controllers/api/searchVidegameByIdFromApi")
const { findVideogamesByIdFromDb } = require("../controllers/db/findVideogameByIdFromDb")
const number = /^\d+$/
const getVideogameById = async (request, response)=>{
    try {
        let videogame = {}
        const {idVideogame} = request.params
        if(number.test(idVideogame)){
            const api = await searchVideogameByIdFromApi(idVideogame)
            videogame = {...api}
        }else{
            const db = await findVideogamesByIdFromDb(idVideogame)
            videogame = {...db}
        }
        if(Object.entries(videogame).length===0) throw Error("Videogame not found!")
        response.status(200).json(videogame)
    } catch (error) {
        return response.status(404).json({error: error.message})
    }
}

module.exports = {
    getVideogameById
}