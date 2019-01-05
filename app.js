const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/index')

app.use('/', routes)
app.disable('x-powered-by')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
