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

router.post('/', (req, res) => {
  const item = req.body
  console.log(item)
  db.addItem(item)
    .then(() => {
      res.json(item)
    })
    .catch((error) => {
      res.status(500).json({ message: 'Unable to add item to db' })
    })
})

module.exports = router
