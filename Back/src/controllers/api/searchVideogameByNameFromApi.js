const axios = require("axios")
const {API_KEY} = require("./../../config/envs")
const { cleanVideogamesPropsFromApi } = require("../../utils/cleanVideogamesPropsFromApi")
const endpoint = `https://api.rawg.io/api/games`

const searchVideogameByNameFromApi = async (name) =>{
    const {data} = await axios(`${endpoint}?search=${name}&key=${API_KEY}`)
    const info = cleanVideogamesPropsFromApi(data.results)
    return info
}

module.exports = {searchVideogameByNameFromApi}