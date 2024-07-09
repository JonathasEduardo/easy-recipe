const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db.config');
const moment = require('moment');

class Recipe extends Model {}

Recipe.init({
    RecipeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'UserID'
        }
    },
    RecipeName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Description: {
        type: DataTypes.TEXT
    },
    Ingredients: {
        type: DataTypes.TEXT
    },
    Instructions: {
        type: DataTypes.TEXT
    },
    Time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    CreatedAt: {
        type: DataTypes.DATE,
        defaultValue: () => moment().format('YYYY-MM-DD HH:mm:ss')
    },
    UpdatedAt: {
        type: DataTypes.DATE,
        defaultValue: () => moment().format('YYYY-MM-DD HH:mm:ss'),
        onUpdate: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'Recipe',
    tableName: 'Recipes', // Nome correto da tabela no banco de dados
    timestamps: false // Se deseja usar timestamps automáticos do Sequelize
});

module.exports = Recipe;
