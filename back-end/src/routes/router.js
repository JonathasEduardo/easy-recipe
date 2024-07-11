const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController");
const recipeController = require('../controllers/recipeController');
const verifyToken = require('../middlewares/token'); // Importe o middleware verifyToken

// Rotas de Usuários
router.post('/user', UserController.createUser);
router.get('/user', UserController.getAll);
router.put('/user/:UserID', verifyToken, UserController.updateUser); // Aplicando o middleware
router.delete('/user/:UserID', verifyToken, UserController.deleteUser); // Aplicando o middleware

router.post('/login',UserController.loginUser);

// Rotas para Receitas
router.get('/recipe', recipeController.getAllRecipes);
router.post('/recipe', verifyToken, recipeController.createRecipe); // Aplicando o middleware
router.put('/recipe/:id', verifyToken, recipeController.updateRecipe); // Aplicando o middleware
router.delete('/recipe/:id', verifyToken, recipeController.deleteRecipe); // Aplicando o middleware

module.exports = router;
