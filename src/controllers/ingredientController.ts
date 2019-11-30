import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Ingredient } from "../entity/Ingredient";
let ingredients;
class IngredientController{

static listAll = async (req: Request, res: Response) => {
  //Get users from database
  const cocktailRepository = getRepository(Ingredient);
  if (!ingredients) {
    ingredients = await cocktailRepository.find();
  }
  //Send the users object
  res.send(ingredients);
};
//TODO: Create ingredient here


};

export default IngredientController;