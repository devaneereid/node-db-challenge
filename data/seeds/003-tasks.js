
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, project_id: 1, description: 'rowValue1', notes: 'task description 1', completed: false },
        { id: 2, project_id: 1, description: 'rowValue2', notes: 'task description 1', completed: false },
        { id: 3, project_id: 2, description: 'rowValue3', notes: 'task description 1', completed: false }
      ]);
    });
};
