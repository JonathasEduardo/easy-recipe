const moment = require('moment');
const Recipe = require('../models/recipeModel'); // Importe o modelo de Recipe do Sequelize
const { where } = require('sequelize');

const createRecipe = async (
  UserID,
  RecipeName,
  Description,
  Ingredients,
  Instructions,
  Time
) => {
  try {
    const newRecipe = await Recipe.create({
      UserID,
      RecipeName,
      Description,
      Ingredients,
      Instructions,
      Time,
      CreatedAt: moment().format(), // Utiliza o Moment para definir a data de criação
      UpdatedAt: moment().format(), // Utiliza o Moment para definir a data de atualização
    });
    console.log("newRecipe ", newRecipe);
    return newRecipe;
  } catch (error) {
    console.error('Erro ao criar receita:', error);
    throw error; // Lança o erro para que seja tratado pelo caller da função
  }
};

const getAllRecipes = async () => {
  try {
    const recipes = await Recipe.findAll();
    return recipes;
  } catch (error) {
    console.log(error);
  }
};

const updateRecipe = async (
  RecipeID,
  RecipeName,
  Description,
  Ingredients,
  Instructions,
  Time
) => {
  try {
    const [updatedRecipe] = await Recipe.update(
      {
        RecipeName,
        Description,
        Ingredients,
        Instructions,
        Time,
        UpdatedAt: moment().format(), // Utiliza o Moment para atualizar a data de atualização
      },
      { where: { RecipeID } }
    );
    console.log("updatedRecipe ", updatedRecipe);
    return updatedRecipe;
  } catch (error) {
    console.log("error ", error);
  }
};

const deleteRecipe = async (RecipeID) => {
    try {
      const deletedRecipe = await Recipe.destroy({ where: { RecipeID } });
      console.log("recipe ", deletedRecipe); // Verifica se deletou corretamente
      return deletedRecipe; // Retorna o resultado da operação de exclusão
    } catch (error) {
      console.log("error ", error);
      throw error; // Lança o erro para que seja tratado pelo caller da função
    }
  };

module.exports = {
  createRecipe,
  getAllRecipes,
  updateRecipe,
  deleteRecipe,
};
