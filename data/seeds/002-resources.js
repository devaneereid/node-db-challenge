
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, name: 'resources 1', description: 'resources seed data 1' },
        { id: 2, name: 'resources 2', description: 'resources seed data 2' },
        { id: 3, name: 'resources 3', description: 'resources seed data 3' }
      ]);
    });
};
