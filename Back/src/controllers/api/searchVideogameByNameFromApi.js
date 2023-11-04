const axios = require("axios")
const {API_KEY} = require("./../../config/envs")
const { cleanVideogamesPropsFromApi } = require("../../utils/cleanVideogamesPropsFromApi")
const endpoint = `https://api.rawg.io/api/games`

const searchVideogameByNameFromApi = async (name) => {
    const { data } = await axios.get(`${endpoint}?search=${name}&key=${API_KEY}`);
    const cleanedInfo = cleanVideogamesPropsFromApi(data.results);
  
    const lowercaseName = name.toLowerCase();
    const filteredInfo = cleanedInfo.filter((videogame) => {
      const lowercaseVideogameName = videogame.name.toLowerCase();
      return lowercaseVideogameName.includes(lowercaseName)
    });
  
    return filteredInfo;
  };
  
  module.exports = { searchVideogameByNameFromApi };
  