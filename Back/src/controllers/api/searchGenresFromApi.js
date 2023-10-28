const axios = require("axios")
const {API_KEY} = require("./../../config/envs")
const endpoint = `https://api.rawg.io/api/genres`

const searchGenresFromApi = async () => {
    const {data} = await axios(`${endpoint}?key=${API_KEY}`)
    return data.results
}

module.exports = {
    searchGenresFromApi
}