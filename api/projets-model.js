const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    addProject,
    getTask,
    addTask,
    getResource,
    addResource
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

// Tasks
function getTask() {
    return db('tasks')
}

function addTask(task, id) {
    return db
        .insert(task, 'id')
        .into('tasks')
        .where({ project_id: id })
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