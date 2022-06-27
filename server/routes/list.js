const express = require('express')
const db = require('../db/list')
const router = express.Router()

// GET shopping list
router.get('/', (req, res) => {
  db.getList()
    .then((results) => {
      res.json(results)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
