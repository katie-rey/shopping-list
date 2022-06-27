const connection = require('./connection')

function getList(db = connection) {
  return db('list').select()
}

function addItem(item, db = connection) {
  console.log(item)
  return db('list')
    .insert(item)
    .then((res) => res[0])
}

module.exports = {
  getList,
  addItem,
}
