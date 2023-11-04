const { checkVideogameExistenceInDb } = require("../controllers/db/checkVideogameExistenceInDb")
const { createVideogame } = require("../controllers/db/createVideogame")

const postVideogame = async (request, response)=>{
  try {
    const {
        name, 
        description, 
        platforms, 
        image, 
        releaseDate, 
        rating,
        genres
    } = request.body

    const check =  await checkVideogameExistenceInDb(name)
    
    if(check) throw Error(`${name} already exists in Db!`)

    const newVideogame = await createVideogame(
        name, 
        description, 
        platforms, 
        image, 
        releaseDate, 
        rating,
        genres
    )
    return response.status(200).json(newVideogame)
  } catch (error) {
    return response.status(400).json({error:error.message})
  }
}

module.exports = {
    postVideogame
}