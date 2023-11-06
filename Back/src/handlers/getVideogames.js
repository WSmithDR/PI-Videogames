const { findVideogamesFromApi } = require("../controllers/api/findVideogamesFromApi")
const { searchVideogameByNameFromApi } = require("../controllers/api/searchVideogameByNameFromApi")
const { findVideogameByNameFromDb } = require("../controllers/db/findVideogameByNameFromDb")
const { findVideogamesFromDb } = require("../controllers/db/findVideogamesFromDb")
const getVideogames = async (request, response)=>{
    try {
        const {name} = request.query
        let foundVideogames = []
        if(name){
            const db = await findVideogameByNameFromDb(name)
            const api = await searchVideogameByNameFromApi(name)
            foundVideogames = [...db,...api]
            foundVideogames = foundVideogames.slice(0,15)
            if(!foundVideogames.length) throw Error(`There are no videgames that contain the name: ${name}`)
        } else {
    const api = await findVideogamesFromApi()
    const db = await findVideogamesFromDb()
    foundVideogames = [...db,...api]
}
        return response.status(200).json(foundVideogames)
    } catch (error) {
        return response.status(400).json({error: error.message})
    }
}

module.exports = {
    getVideogames
}