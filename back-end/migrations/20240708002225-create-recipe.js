'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Recipes', {
      RecipeID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      UserID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // Nome da tabela de referência
          key: 'UserID'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      RecipeName: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      Description: {
        type: Sequelize.TEXT
      },
      Ingredients: {
        type: Sequelize.TEXT
      },
      Instructions: {
        type: Sequelize.TEXT
      },
      Time: {
        type: Sequelize.INTEGER,
        allowNull: false // ou true se a coluna puder ser nula
      },
      CreatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      UpdatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        onUpdate: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Recipes');
  }
};
