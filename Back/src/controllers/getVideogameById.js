const catchedAsync = require("../utils/catchedAsync")
const handleVideogameId = require("./../handlers/handleVideogameId")

const getVideogameById = catchedAsync(async (request, response)=>{
    const {id} = request.params
    const foundVideogame = await handleVideogameId(id)
    return response.status(200).json(foundVideogame)
})

module.exports = getVideogameById