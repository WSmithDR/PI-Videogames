const endpoint = `https://api.rawg.io/api/games`
const axios = require("axios")
const {API_KEY} = require("../../config/envs")

const searchVideogameByIdFromApi = async (id) => {
    const {data} = await axios(`${endpoint}/${id}?key=${API_KEY}`)
    return data
}

module.exports = {searchVideogameByIdFromApi}