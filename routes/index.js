const express = require('express')
const router = express.Router()
const Cocktail = require('../services/cocktail')
const cocktail = new Cocktail()

// Get all cocktails: http://localhost:3000/cocktails
router.get('/cocktails', async function (req, res) {
  let response = await cocktail.getAllCocktails()
  res.json(response)
})

// Get single cocktail: http://localhost:3000/cocktails/Mojito
router.get('/cocktails/:name', async function (req, res) {
  let response = await cocktail.getCocktailByName(req.params.name)
  res.json(response)
})

module.exports = router
