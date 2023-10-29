const endpoint = `https://api.rawg.io/api/games`
const {API_KEY} = require("../../config/envs")
const axios = require("axios")
const { cleanVideogamesPropsFromApi } = require("../../utils/cleanVideogamesPropsFromApi")

const findVideogamesFromApi = async () =>{
    const {data} =  await axios(`${endpoint}?key=${API_KEY}`)
    const info = cleanVideogamesPropsFromApi(data.results)
    return info
}

module.exports = {findVideogamesFromApi}