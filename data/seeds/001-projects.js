
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'project 1', description: 'project seed data 1', completed: false },
        { id: 2, name: 'project 2', description: 'project seed data 2', completed: false },
        { id: 3, name: 'project 3', description: 'project seed data 3', completed: false }
      ]);
    });
};
