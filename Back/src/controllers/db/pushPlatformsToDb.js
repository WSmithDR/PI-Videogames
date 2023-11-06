const { Platform } = require("./../../db")

const pushPlatformsToDb = async (api) => {
    for (const platform of api){
        await Platform.findOrCreate({
            where: {
                name: platform.name
            }
        })
    }
    
    return Platform.findAll()
}

module.exports = {
    pushPlatformsToDb
}
