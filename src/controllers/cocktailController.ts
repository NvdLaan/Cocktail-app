import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { Cocktail } from "../entity/Cocktail";
let cocktails;
class CocktailController{

static listAll = async (req: Request, res: Response) => {
  //Get users from database
  const cocktailRepository = getRepository(Cocktail);
  if (!cocktails) {
    cocktails = await cocktailRepository.find();
  }
  //Send the users object
  res.send(cocktails);
};

static newCocktail = async (req: Request, res: Response) => {
  //Get parameters from the body
  let { strDrink } = req.body;
  let cocktail = new Cocktail();
  cocktail.strDrink = strDrink

  const errors = await validate(cocktail);
  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }

  const cocktailRepository = getRepository(Cocktail);
  try {
    await cocktailRepository.save(cocktail);
  } catch (e) {
    res.status(409).send("username already in use");
    return;
  }
}
};

export default CocktailController;