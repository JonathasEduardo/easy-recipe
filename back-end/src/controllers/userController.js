const userService = require("../services/userService");
const {
  createUserSchema,
} = require("../validations/userValidator/user.create.validation");
const {
  putUserSchema,
} = require("../validations/userValidator/user.put.validation");

const createUser = async (req, res) => {
  try {
    const userVerified = createUserSchema.parse(req.body);
    const { username, email, password } = userVerified;
    const newUser = await userService.createUser(username, email, password);
    console.log("newUser ", newUser);
    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getAll = async (req_, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log("error) ", error);
    res.status(500).json({ message: "An error has occurred" });
  }
};
const updateUser = async (req, res) => {
  try {
    const userVerified = putUserSchema.parse(req.body);
    const { username, email, password } = userVerified;
    const { id } = req.params;
    const updatedUser = await userService.updateUser(
      id,
      username,
      email,
      password
    );

    if (!updatedUser)
      return res.status(404).json({ message: "Usuario não encontrado" });

    return res.status(200).json({ message: "Usuario atualizdo com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    return res.status(200).json({ message: "Usuario deletado com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

module.exports = {
  getAll,
  createUser,
  updateUser,
  deleteUser,
};
