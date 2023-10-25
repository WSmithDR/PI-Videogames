const { API_KEY } = require("../config/envs")
const {Videogame} = require("../db")
const axios = require("axios")


const handleVideogames = async () => {
    try {
        const endpoint = `https://api.rawg.io/api/games`
        const dbVideogames = await Videogame.findAll()
        const apiVideogames = await axios(`${endpoint}?key=${API_KEY}`)
        const webAppVideogames = [...dbVideogames, ...apiVideogames.data.results]
        return webAppVideogames
    } catch (error) {
        return new Error(`Error in the handler of getVideoGames`, error)
    }
}

module.exports = handleVideogames