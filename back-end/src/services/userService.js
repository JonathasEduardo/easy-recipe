const { where } = require("sequelize");
const { userModel } = require("../models/userModel");
const User = require("../models/userModel");

const createUser = async (username, email, password) => {
  try {
    const newUser = await User.create({ username, email, password });
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  try {
    const newUser = await User.findAll();
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (id, username, email, password) => {
  try {
    const [updatedUser] = await User.update(
      { username, email, password },
      { where: { id:id } }
    );
    console.log("updatedUser ", updatedUser);
    return updatedUser;
  } catch (error) {
    console.log("error ", error);
  }
};

const deleteUser = async (id) => {
  try {
    const user = await User.destroy({ where: { id:id } });

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
