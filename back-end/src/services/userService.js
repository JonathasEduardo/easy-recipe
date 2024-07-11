const User = require("../models/userModel");
const moment = require('moment');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const createUser = async (username, email, password) => {
  try {
    const newUser = await User.create({
      username,
      email,
      password,
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      lastLogin: moment().format('YYYY-MM-DD HH:mm:ss')
    });
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (UserID, username, email, password) => {
  try {
    const [updatedUser] = await User.update(
      { 
        username, 
        email, 
        password, 
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        lastLogin: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      { where: { UserID } }
    );
    console.log("updatedUser ", updatedUser);
    return updatedUser;
  } catch (error) {
    console.log("error ", error);
  }
};
const deleteUser = async (UserID) => {
  try {
    const user = await User.destroy({ where: { UserID } });

    console.log(user);
    return user;
  } catch (error) {
    console.log("error ", error);
  }
};

const authenticateUser = async (email, password) => {
  try {
    // Verifica se o email foi fornecido
    if (!email || !password) {
      return null;
    }

    // Busca o usuário pelo email fornecido
    const user = await User.findOne({ where: { email } });

    // Se não encontrou usuário, retorna null
    if (!user) {
      return null;
    }

    // Verifica se a senha fornecida corresponde à senha armazenada no banco
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return null; // Senha incorreta
    }

    // Atualiza o último login do usuário (opcional)
    user.lastLogin = new Date();
    await user.save();

    // Retorna o usuário autenticado
    return user;

  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
    throw error; // Lança o erro para ser tratado no controlador
  }
};
module.exports = {
  getAll,
  createUser,
  updateUser,
  deleteUser,
  authenticateUser,
};