const { DataTypes, Model} = require('sequelize');
const {Sequelize} = require('sequelize');
const sequelize = require('../database/db.config');
  class User extends Model{}
  User.init({
    userid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Nome de Usuário
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // E-mail
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // Senha
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{sequelize:sequelize,modelName: "User",tableName:"users", timestamps: false });
 

module.exports = User;