const connection = require('./connection')

function getList(db = connection) {
  return db('list').select()
}

function addItem(item, db = connection) {
  return db('list')
    .insert(item)
    .then((res) => res[0])
}

function deleteItem(item, db = connection) {
  return db('list').where('list.id', item.id).delete()
}

// DAILY SHOPPING LIST

function addDailyItem(item, db = connection) {
  return db('dailyList')
    .insert(item)
    .then((res) => res[0])
}

// get daily shopping list
function getDailyList(db = connection) {
  return db('dailyList').select()
}

function deleteDailyItem(item, db = connection) {
  return db('dailyList').where('dailyList.id', item.id).delete()
}
module.exports = {
  getList,
  addItem,
  deleteItem,
  addDailyItem,
  getDailyList,
  deleteDailyItem,
}
