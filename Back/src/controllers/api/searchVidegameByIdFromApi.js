const endpoint = `https://api.rawg.io/api/games`
const axios = require("axios")
const {API_KEY} = require("../../config/envs")
const { cleanVideogamesPropsFromApi } = require("../../utils/cleanVideogamesPropsFromApi")

const searchVideogameByIdFromApi = async (id) => {
    let {data} = await axios(`${endpoint}/${id}?key=${API_KEY}`)
    data = cleanVideogamesPropsFromApi(data)
    return data
}

module.exports = {searchVideogameByIdFromApi}