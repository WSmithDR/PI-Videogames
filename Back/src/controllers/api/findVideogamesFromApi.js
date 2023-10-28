const endpoint = `https://api.rawg.io/api/games`
const {API_KEY} = require("../../config/envs")
const axios = require("axios")

const findVideogamesFromApi = async () =>{
    const {data} =  await axios(`${endpoint}?key=${API_KEY}`)
    return data.results
}

module.exports = {findVideogamesFromApi}