const { z } = require("zod");

const loginSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().min(5, { message: "A senha precisa ter pelo menos 5 caracteres" }),
});

module.exports = {
  loginSchema,
};