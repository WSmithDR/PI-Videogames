const { Genre } = require("./../../db")

const pushGenresToDb = async (info) => {
    for (const genre of info){
        await Genre.findOrCreate({
            where: {
                name: genre.name
            }
        })
    }
    
    return Genre.findAll()
}

module.exports = {
    pushGenresToDb
}
