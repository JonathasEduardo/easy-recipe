const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db.config');
const moment = require('moment');

class User extends Model {}

User.init({
  UserID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: () => moment().format('YYYY-MM-DD HH:mm:ss'),
  },
  lastLogin: {
    type: DataTypes.DATE,
    defaultValue: () => moment().format('YYYY-MM-DD HH:mm:ss'),
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: false,
});

module.exports = User;
