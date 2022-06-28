const express = require('express')
const path = require('path')

const fruitRoutes = require('./routes/list')
const listRoutes = require('./routes/shoppingList')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// server.get('/list', (req, res) => {
//   res.send('Hello')
// })

server.use('/api/v1', fruitRoutes)
server.use('/api/v1/list', listRoutes)

module.exports = server
