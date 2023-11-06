const { searchGenresFromApi } = require("../controllers/api/searchGenresFromApi")
const { pushGenresToDb } = require("../controllers/db/pushGenresToDb")

const getGenres = async (request, response)=>{
    try {
        const genres = await searchGenresFromApi()
        const success = await pushGenresToDb(genres)
        return response.status(200).json(success)
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}

module.exports = {
    getGenres
}