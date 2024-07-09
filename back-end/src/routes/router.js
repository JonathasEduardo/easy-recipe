const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController");
const recipeController = require('../controllers/recipeController');

router.post('/user', UserController.createUser);
router.get('/user', UserController.getAll);
router.put('/user/:UserID', UserController.updateUser);
router.delete('/user/:UserID', UserController.deleteUser);

// Rotas para Receitas
router.get('/recipe', recipeController.getAllRecipes);
router.post('/recipe', recipeController.createRecipe);
router.put('/recipe/:id', recipeController.updateRecipe);
router.delete('/recipe/:id', recipeController.deleteRecipe);


module.exports = router;