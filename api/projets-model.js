const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    addProject,
    getTask,
    addTask,
    getResource,
    addResource,
    findById,
    update,
    findByTaskId,
    updateTask,
    remove,
    removeTask
}

// Projects
function getProjects() {
    return db('projects')
}

function addProject(project) {
    return db   
        .insert(project, 'id')
        .into('projects')
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first()
}

function update(changes, id) {
    return db('projects')
        .where({ id })
        .update(changes, 'id')
} 

function remove(id) {
    return db('projects')
        .where({ id })
        .del()
}

// Tasks
function getTask() {
    return db('tasks')
        .select('tasks.id', 'projects.id', 'projects.name', 'tasks.project_id', 'tasks.description', 'tasks.notes', 'tasks.completed')
        .leftJoin('projects', 'tasks.project_id', 'projects.name')
}

function addTask(task, id) {
    return db
        .insert(task, 'id')
        .into('tasks')
        .where({ project_id: id })
}

function findByTaskId(id) {
    return db('tasks')
        .where({ id })
        .first()
}

function updateTask(changes, id) {
    return db('tasks')
        .where({ id })
        .update(changes, 'id')
} 

function removeTask(id) {
    return db('tasks')
        .where({ id })
        .del()
}

// Resources
function getResource() {
    return db('resources')
}

function addResource(resource) {
    return db
        .insert(resource, 'id')
        .into('resources')
}