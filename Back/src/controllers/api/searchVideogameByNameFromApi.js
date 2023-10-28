const axios = require("axios")
const {API_KEY} = require("./../../config/envs")
const endpoint = `https://api.rawg.io/api/games`

const searchVideogameByNameFromApi = async (name) =>{
    const {data} = await axios(`${endpoint}?search=${name}&key=${API_KEY}`)
    return data.results
}

module.exports = {searchVideogameByNameFromApi}