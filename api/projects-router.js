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
router.post('/', (req, res) => {
    const projectData = req.body;
    Projects.addProject(projectData)
    .then(project => {
        res.status(201).json(project);
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
router.post('/tasks', (req, res) => {
    const taskData = req.body;
    const id = req.params.id;
    Projects.addTask(taskData, id)
    .then(tasks => {
        res.status(201).json(tasks);
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
router.post('/resources', (req, res) => {
    const resourceData = req.body;
    const id = req.params.id;
    console.log(req.body)
    Projects.addResource(resourceData, id)
    .then(resources => {
        res.status(201).json(resources);
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to create new resource' });
    });
});

module.exports = router;