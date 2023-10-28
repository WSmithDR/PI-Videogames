const { createVideogame } = require("../controllers/db/createVideogame")

const postVideogame = async (request, response)=>{
  try {
    const {
        name, 
        description, 
        platforms, 
        image, 
        releaseDate, 
        rating
    } = request.body

    const newVideogame = await createVideogame(
        name, 
        description, 
        platforms, 
        image, 
        releaseDate, 
        rating
    )
    return response.status(200).json(newVideogame)
  } catch (error) {
    return response.status(400).json({error:error.message})
  }
}

module.exports = {
    postVideogame
}