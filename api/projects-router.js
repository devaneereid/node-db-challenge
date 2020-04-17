const express = require('express');

const Projects = require('./projets-model.js');

const router = express.Router();

// GET Projects
router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

// POST Projects
router.post('/,', (req, res) => {
    const projectsData = req.body;

    Projects.addProject(projectsData)
        .then(projects => {
            res.status(201).json(projects)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to create new project' });
        });
});

// GET Tasks
router.get('/tasks', (req, res) => {
    Projects.getTask()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});

// POST Tasks
router.post('/tasks,', (req, res) => {
    Projects.addTask('tasks')
        .insert(req.body)
        .then(ids => {
            const id = ids[0];
            Projects('tasks')
            .where({ id })
            .first()
            .then(tasks => {
                res.status(201).json(tasks)
            })
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to create new project' });
        });
});

// GET Resources
router.get('/resources', (req, res) => {
    Projects.getResource()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});

// POST Resources
router.post('/resources,', (req, res) => {
    Projects.addResource('resources')
        .insert(req.body)
        .then(ids => {
            const id = ids[0];
            Projects('resources')
            .where({ id })
            .first()
            .then(resources => {
                res.status(201).json(resources)
            })
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});


module.exports = router;