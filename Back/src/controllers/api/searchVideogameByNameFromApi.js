
const endpoint = `https://api.rawg.io/api/games?search={game}`
const searchVideogameByNameFromApi = async (name) =>{
    return await axios(${endpoint})
}

module.exports = {searchVideogameByNameFromApi}