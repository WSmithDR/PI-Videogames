const { Videogame, Genre, Platform } = require("./../../db");

const findVideogamesByIdFromDb = async (id) => {
  const videogame = await Videogame.findByPk(id, {
    include: [
      {
        model: Genre,
      },
      {
        model: Platform,
      }
    ],
  });
  
  const plainVideogame = videogame.get();

  return plainVideogame
};

module.exports = {
  findVideogamesByIdFromDb,
};
