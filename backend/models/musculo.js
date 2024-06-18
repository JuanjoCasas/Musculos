const { DataTypes } = require('sequelize');
const sequelize = require('../data/db')

const Musculo = sequelize.define("Musculo",
  {
    idMusculo:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre:{
      type: DataTypes.STRING
    },
    ubicacion:{
      type: DataTypes.STRING
    },
    funcion:{
      type: DataTypes.STRING
    },
    tipoFibra:{
      type: DataTypes.STRING
    },
    acciones:{
      type: DataTypes.STRING
    },
    enlace:{
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  }
)

module.exports = Musculo