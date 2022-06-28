const express = require('express')
const db = require('../db/list')
const router = express.Router()

// get daily shopping list
router.get('/', (req, res) => {
  db.getDailyList()
    .then((results) => {
      console.log(results)
      res.json(results)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

// add to shopping list
router.post('/', (req, res) => {
  const item = req.body
  // console.log(item)
  db.addDailyItem(item)
    .then(() => {
      res.json(item)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to add item to db' })
    })
})

router.delete('/', (req, res) => {
  const item = req.body
  console.log(item)
  db.deleteDailyItem(item)
    .then(() => {
      res.json(item)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to delete item in db' })
    })
})

module.exports = router
