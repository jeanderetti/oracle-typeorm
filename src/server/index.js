const express = require('express')

const routes = require('../routes')
const userRoute = require('../routes/User')

const app = express()

app.use(express.json())

app.use(routes)
app.use('/User', userRoute)

module.exports = app