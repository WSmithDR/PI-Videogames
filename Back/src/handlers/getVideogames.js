const { findVideogamesFromApi } = require("../controllers/api/findVideogamesFromApi")
const { findVideogamesFromDb } = require("../controllers/db/findVideogamesFromDb")

const getVideogames = async (request, response)=>{
    try {
        const {name} = request.query
        let foundVideogames = []
        if(name){

        } else {
            const api = await findVideogamesFromApi()
            const db = await findVideogamesFromDb()
            foundVideogames = [...api, ...db]
        }
        return response.status(200).json(foundVideogames)
    } catch (error) {
        return response.status(400).json({error: error.message})
    }
}

module.exports = {
    getVideogames
}