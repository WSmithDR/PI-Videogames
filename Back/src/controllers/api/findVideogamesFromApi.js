const endpoint = `https://api.rawg.io/api/games`
const {API_KEY} = require("../../config/envs")
const axios = require("axios")
const { cleanVideogamesPropsFromApi } = require("../../utils/cleanVideogamesPropsFromApi")

const findVideogamesFromApi = async () =>{
    let videogames = []
    let page = 1
    while (videogames.length<100){
        const {data} =  await axios(`${endpoint}?key=${API_KEY}&page=${page}`)
        const info = cleanVideogamesPropsFromApi(data.results)
        videogames = [...videogames, ...info]
        page++
    }
    return videogames
}

module.exports = {findVideogamesFromApi}