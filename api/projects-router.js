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

// PUT Projects 
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Projects.findById(id)
    .then(project => {
        if (project) {
            Projects.update(changes, id)
            .then(updatedProject => {
                res.json(updatedProject);
            })
        } else {
            res.status(404).json({ message: 'Could not find project with the given id' });
        }
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to update project' });
    });
});

// DELETE Project 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Projects.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: deleted });
            } else {
                res.status(404).json({ message: 'Could not find project with given id' });
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to delete project' });
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

// PUT Tasks 
router.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Projects.findByTaskId(id)
    .then(task => {
        if (task) {
            Projects.updateTask(changes, id)
            .then(updatedTask => {
                res.json(updatedTask);
            })
        } else {
            res.status(404).json({ message: 'Could not find task with the given id' });
        }
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to update task' });
    });
});

// DELETE Task
router.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    Projects.removeTask(id)
        .then(deletedTask => {
            if (deletedTask) {
                res.json({ removed: deletedTask });
            } else {
                res.status(404).json({ message: 'Could not find task with given id' });
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to delete task' });
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