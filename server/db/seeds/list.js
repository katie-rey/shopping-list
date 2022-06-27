exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('list')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('list').insert([
        { id: 1, name: 'banana', price: 5.99 },
        { id: 2, name: 'apple', price: 5.99 },
        { id: 3, name: 'feijoa', price: 5.99 },
      ])
    })
}
