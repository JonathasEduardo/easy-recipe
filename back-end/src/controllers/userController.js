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

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log("error ", error);
    res.status(500).json({ message: "An error has occurred" });
  }
};

const updateUser = async (req, res) => {
  try {
    const userVerified = putUserSchema.parse(req.body);
    const { username, email, password } = userVerified;
    const { UserID } = req.params; // Certifique-se de que este nome corresponde ao nome usado na rota

    if (!UserID) {
      return res.status(400).json({ message: "O ID do usuário é obrigatório" });
    }

    const updatedUser = await userService.updateUser(
      UserID,
      username,
      email,
      password
    );

    if (!updatedUser)
      return res.status(404).json({ message: "Usuario não encontrado" });

    return res.status(200).json({ message: "Usuario atualizado com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { UserID } = req.params;
    await userService.deleteUser(UserID);
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
