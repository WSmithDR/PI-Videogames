const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    image:{
      type: DataTypes.STRING,
      validate: {isUrl: true}
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT,
      validate:{min:0, max:5}
    }
  }, {timestamps: false});
};
