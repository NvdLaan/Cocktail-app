const MongoClient = require('mongodb').MongoClient
const config = require('../config')
const mongoUrl = `mongodb+srv://${config.db.username}:${config.db.password}@${config.db.host}/${config.db.name}`

class Cocktail {
  constructor (name) {
    this.name = name
  }

  getAllCocktails () {
    return new Promise((resolve) => {
      MongoClient.connect(mongoUrl, { useNewUrlParser: true }, function (err, db) {
        if (err) console.err(err)
        let dbo = db.db(config.db.name)
        dbo.collection('cocktails').find({}).toArray(function (err, results) {
          if (err) console.err(err)
          resolve(results)
        })
      })
    })
  }

  getCocktailByName (name) {
    return new Promise((resolve) => {
      MongoClient.connect(mongoUrl, { useNewUrlParser: true }, function (err, db) {
        if (err) console.err(err)
        let dbo = db.db(config.db.name)
        dbo.collection('cocktails').find({ strDrink: `${name}` }).toArray(function (err, results) {
          if (err) console.err(err)
          resolve(results)
        })
      })
    })
  }
}

module.exports = Cocktail
