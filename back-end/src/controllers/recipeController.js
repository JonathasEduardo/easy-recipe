const recipeService = require("../services/recipeService");
const { createRecipeSchema } = require("../validations/recipeValidator/recipe.create.validation");
const { putRecipeSchema } = require("../validations/recipeValidator/recipe.put.validation");

const createRecipe = async (req, res) => {
  try {
    const recipeVerified = createRecipeSchema.parse(req.body);
    const { UserID, RecipeName, Description, Ingredients, Instructions, Time } = recipeVerified;
    
    const newRecipe = await recipeService.createRecipe(UserID, RecipeName, Description, Ingredients, Instructions, Time);
    
    return res.status(201).json(newRecipe);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Erro ao criar receita", error: error.errors });
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipeService.getAllRecipes();
    return res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro ao buscar receitas" });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipeVerified = putRecipeSchema.parse(req.body);
    const { RecipeName, Description, Ingredients, Instructions, Time } = recipeVerified;
    const { id } = req.params;

    const updatedRecipe = await recipeService.updateRecipe(id, RecipeName, Description, Ingredients, Instructions, Time);
    
    if (!updatedRecipe) {
      return res.status(404).json({ message: "Receita não encontrada" });
    }

    return res.status(200).json({ message: "Receita atualizada com sucesso" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Erro ao atualizar receita", error: error.errors });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await recipeService.deleteRecipe(id);
    
    

    return res.status(200).json({ message: "Receita deletada com sucesso" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro ao deletar receita" });
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  updateRecipe,
  deleteRecipe,
};
