const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cors())

const mainRoutes = require('./routes/main')

app.use(mainRoutes)

const PORT = 8000;

app.listen(PORT, () => {
  console.log('Node.js listening on port ' + PORT)
})