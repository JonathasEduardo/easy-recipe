const User = require("../models/userModel");
const moment = require('moment');

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

module.exports = {
  getAll,
  createUser,
  updateUser,
  deleteUser,
};