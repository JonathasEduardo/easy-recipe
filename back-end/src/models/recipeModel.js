const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Configure seu sequelize aqui
const User = require('./user'); // Importe o modelo de User se necessário

const Recipe = sequelize.define('Recipe', {
    RecipeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    CreatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    UpdatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
});

// Relacionamento com User (opcional se não estiver usando relacionamentos no Sequelize)
Recipe.belongsTo(User, { foreignKey: 'UserID' });
User.hasMany(Recipe, { foreignKey: 'UserID' });

module.exports = Recipe;