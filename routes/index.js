const express = require('express')
const router = express.Router()
const Cocktail = require('../services/cocktail')
const cocktail = new Cocktail()

// Get all cocktails: http://localhost:3000/cocktails
router.get('/cocktails', function (req, res) {
  cocktail.getAllCocktails().then(function (value) {
    res.json(value)
  })
})

// Get single cocktail: http://localhost:3000/cocktails/Mojito
router.get('/cocktails/:name', function (req, res) {
  cocktail.getCocktailByName(req.params.name).then(function (value) {
    res.json(value)
  })
})

module.exports = router
