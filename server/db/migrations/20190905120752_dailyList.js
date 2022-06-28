exports.up = function (knex) {
  return knex.schema.createTable('dailyList', (table) => {
    table.increments('id')
    table.string('name')
    table.int('price')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('dailyList')
}
