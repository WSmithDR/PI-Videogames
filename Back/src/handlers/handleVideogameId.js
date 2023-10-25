const {Videogame} = require("./../db")
const axios = require("axios")
const endpoint = `https://api.rawg.io/api/games`
const API_KEY = require("./../config/envs")

const handleVideogameId = async () =>{
    try {
        const foundVideogame = {}
        const videogameFromApi = await axios(`${endpoint}/${id}?key=${API_KEY}`)
        const videogameFromDB = await Videogame.findByPk({
            where: {
                id
            }
        })
        if(!videogameFromApi || !videogameFromDB) return response.status(400).send("Videogame not found!")
        if(videogameFromApi) foundVideogame = {...videogameFromApi.data}
        if(videogameFromDB) foundVideogame = {...videogameFromDB}
        return foundVideogame
    } catch (error) {
        throw Error("There is a fail from the handler for getVideogameById.")
    }
}

module.exports = handleVideogameId