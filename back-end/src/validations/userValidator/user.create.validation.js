const { z } = require("zod");

const createUserSchema = z.object({
  username: z
    .string()
    .min(3, { message: "O nome precisa ter pelo menos 3 letras" }),
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(5, { message: "A senha precisa ter pelo menos 5 caracteres" })
    .refine((password) => /[A-Z]/.test(password), {
      message: "A senha precisa conter pelo menos uma letra maiúscula",
    })
    .refine((password) => /\d/.test(password), {
      message: "A senha precisa conter pelo menos um número",
    }),
});

module.exports = {
  createUserSchema,
};
