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

  db.addItem(item)
    .then(() => {
      res.json(item)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to add item to db' })
    })
})

router.delete('/', (req, res) => {
  const item = req.body

  db.deleteItem(item)
    .then(() => {
      res.json(item)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to delete item in db' })
    })
})

module.exports = router
