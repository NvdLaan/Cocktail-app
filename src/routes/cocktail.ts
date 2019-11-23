import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import CocktailController from "../controllers/cocktailController";

const router = Router();


router.get("/",[checkJwt, checkRole(["ADMIN"])], CocktailController.listAll);
router.post("/", [checkJwt, checkRole(["ADMIN"])], CocktailController.newCocktail);

export default router;