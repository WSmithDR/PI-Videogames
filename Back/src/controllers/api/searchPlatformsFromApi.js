const axios = require("axios")
const { API_KEY } = require("../../config/envs")
const endpoint = `https://api.rawg.io/api/platforms`

const searchPlatformsFromApi = async () => {
    const {data} = await axios(`${endpoint}?key=${API_KEY}`)
    return data.results
}

module.exports = {searchPlatformsFromApi}