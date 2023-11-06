const { Videogame, Genre, Platform } = require("./../../db");

const findVideogamesByIdFromDb = async (id) => {
  const videogame = await Videogame.findByPk(id, {
    include: [
      {
        model: Genre,
        as:"genres"
      },
      {
        model: Platform,
        as:"platforms"
      }
    ],
  });
  
  const plainVideogame = videogame.get();

  return plainVideogame
};

module.exports = {
  findVideogamesByIdFromDb,
};
