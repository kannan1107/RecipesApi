// routes/recipeRoutes.js
import express from "express";
import {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

router.post("/createRecipe", createRecipe);
router.get("/getAllRecipes", getAllRecipes);
router.get("/getRecipeById/:id", getRecipeById);
router.put("/updateRecipe/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router; // ✅ ES module export
