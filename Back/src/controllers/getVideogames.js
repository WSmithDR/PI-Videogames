const handleVideogames = require("../handlers/handleVideogames")
const catchedAsync = require("../utils/catchedAsync")

const getVideogames = catchedAsync(async (request, response) => {
        const games = await handleVideogames()
        return response.status(200).json(games)
    });

module.exports = getVideogames