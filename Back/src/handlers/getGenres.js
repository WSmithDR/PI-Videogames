const { searchGenresFromApi } = require("../controllers/api/searchGenresFromApi")

const getGenres = async (request, response)=>{
    try {
        const genres = await searchGenresFromApi()
        return response.status(200).json(genres)
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}

module.exports = {
    getGenres
}