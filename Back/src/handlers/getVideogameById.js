const { searchVideogameByIdFromApi } = require("../controllers/api/searchVidegameByIdFromApi")

const getVideogameById = async (request, response)=>{
    let videogame = {}
    try {
        const {idVideogame} = request.params
        const api = await searchVideogameByIdFromApi(idVideogame)
        videogame = {...api}
        if(!videogame) throw Error(`There's no a videogame with id: ${id}.`)
        return response.status(200).json(videogame)
    } catch (error) {
        return response.status(404).json({error: error.message})
    }
}

module.exports = {
    getVideogameById
}