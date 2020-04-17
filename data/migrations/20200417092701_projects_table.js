
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    // Projects (unique id, name, description, boolean)
        tbl.increments();

        tbl.string('name', 128)
            .unique()
            .notNullable();
        
        tbl.string('description', 255)
            .notNullable();

        tbl.boolean('completed', false)
            .notNullable();

    })
    // Resources (unique id, name, description)
    .createTable('resources', tbl => {
        tbl.increments();

        tbl.string('name', 128)
            .notNullable()
            .unique();

        tbl.string('description', 255)
            .notNullable();

    })
    // Tasks (unique id, description, notes )
    .createTable('tasks', tbl => {
        tbl.increments();
    
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        
        tbl.string('description', 255)
            .notNullable();
        
        tbl.string('notes', 255)
        
        tbl.boolean('completed', false)
            .notNullable();

    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
