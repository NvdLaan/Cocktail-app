import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import CocktailController from "../controllers/cocktailController";

const router = Router();


router.get("/", CocktailController.listAll);
router.post("/test", CocktailController.listCocktailsByIngredients);
router.post("/", CocktailController.newCocktail);

export default router;