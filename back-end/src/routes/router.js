const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController");

router.post('/user', UserController.createUser);
router.get('/user', UserController.getAll);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);


module.exports = router;