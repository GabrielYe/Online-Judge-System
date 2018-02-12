const express = require('express');
const router = express.Router();
const problemService = require('../services/problemService');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// Get all the problems;
router.get('/problems', (req, res) => {
    problemService.getProblems()
        .then(problems => res.json(problems),
            error => res.status(400).send("There is no problem in database."));
});

// Get a specific problem given by id;
router.get('/problems/:id', (req, res) => {
    const id = req.params.id;
    problemService.getProblem(+id)
        .then(problem => res.json(problem),
            error => res.status(400).send("This problem doesn't exist."));
});

// Add a new problem;
router.post('/problems/newProblem', jsonParser, (req, res) => {
    problemService.addProblem(req.body)
        .then(newProblem => res.json(newProblem),
            error => res.status(400).send("Problem already exists!"));
});

module.exports = router;