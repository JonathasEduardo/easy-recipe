const { z } = require("zod");

const putRecipeSchema = z.object({
  UserID: z.number().int().positive(),
  RecipeName: z.string().min(3).max(100),
  Description: z.string().min(10).max(255),
  Ingredients: z.string().min(2).max(1000),
  Instructions: z.string().min(10).max(2000),
  Time: z.number().int().positive(),
});

module.exports = {
  putRecipeSchema,
};
