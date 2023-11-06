const { searchPlatformsFromApi } = require("../controllers/api/searchPlatformsFromApi")
const { pushPlatformsToDb } = require("../controllers/db/pushPlatformsToDb")

const getPlatforms = async (request, response)=>{
    try {
        const api = await searchPlatformsFromApi()
        const db = await pushPlatformsToDb(api)
        return response.status(200).json(db)
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}

module.exports = {
    getPlatforms
}