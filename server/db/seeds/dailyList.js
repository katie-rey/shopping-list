exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('dailyList')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('dailyList').insert([
        { id: 1, name: 'Apples', price: 2 },
        { id: 3, name: 'Bananas', price: 2 },
      ])
    })
}
