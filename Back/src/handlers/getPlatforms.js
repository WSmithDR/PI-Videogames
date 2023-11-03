const { searchPlatformsFromApi } = require("../controllers/api/searchPlatformsFromApi")

const getPlatforms = async (request, response)=>{
    try {
        const platforms = await searchPlatformsFromApi()
        console.log(platforms)
        return response.status(200).json(platforms)
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}

module.exports = {
    getPlatforms
}