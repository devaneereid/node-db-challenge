const express = require('express');
const helmet = require('helmet');

const ProjectsRouter = require('./api/projects-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/projects', ProjectsRouter);

server.get('/', (req, res) => {
    res.send(`<h1>Node DB Sprint Challenge</h1>`);
});

module.exports = server;