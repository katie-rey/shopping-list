const connection = require('./connection')

function getList(db = connection) {
  return db('list').select()
}

function addItem(item, db = connection) {
  return db('list').insert(item)
}

module.exports = {
  getList,
  addItem,
}
