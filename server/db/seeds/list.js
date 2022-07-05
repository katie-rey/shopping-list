exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('list')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('list').insert([
        { id: 1, name: 'Apples', price: 2 },
        { id: 2, name: 'Avocado', price: 5 },
        { id: 3, name: 'Bananas', price: 2 },
        { id: 4, name: 'Beetroot', price: 2 },
        { id: 5, name: 'Broccoli', price: 4 },
        { id: 6, name: 'Capsicum', price: 3.5 },
        { id: 7, name: 'Carrots', price: 1 },
        { id: 8, name: 'Celery', price: 4 },
        { id: 9, name: 'Courgette', price: 1 },
        { id: 10, name: 'Ginger', price: 1 },
        { id: 11, name: 'Lettuce', price: 4 },
        { id: 12, name: 'Mushroom', price: 4 },
        { id: 13, name: 'Red Onion', price: 1 },
        { id: 14, name: 'White Onion', price: 1 },
        { id: 15, name: 'Spinach', price: 5 },
        { id: 16, name: 'Tomatoes', price: 4 },
        { id: 17, name: 'Bread', price: 4 },
        { id: 18, name: 'Bacon', price: 5 },
        { id: 19, name: 'Chicken Thigh', price: 5 },
        { id: 20, name: 'Chicken Breast', price: 9 },
        { id: 21, name: 'Fish', price: 6 },
        { id: 22, name: 'Sausages', price: 8 },
        { id: 23, name: 'Tuna', price: 1.5 },
        { id: 24, name: 'Oil', price: 3 },
        { id: 25, name: 'Olive Oil', price: 12.99 },
        { id: 26, name: 'Tacos', price: 5.5 },
        { id: 27, name: 'Noodles', price: 1.5 },
        { id: 28, name: 'Tea', price: 3 },
        { id: 29, name: 'Coffee', price: 8 },
        { id: 30, name: 'Canned Toms', price: 1 },
        { id: 31, name: 'Canned Sweetcorn', price: 1 },
        { id: 32, name: 'Canned Pineapple', price: 1 },
      ])
    })
}
