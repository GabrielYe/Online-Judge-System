const ProblemModel = require('../models/problemModel');

// Get all the problems;
const getProblems = function() {
    return new Promise((resolve, reject) => {
        ProblemModel.find({}, (err, problems) => {
            if (err) {
                reject(err);
            } else {
                resolve(problems);
            }
        })
    });
}

// Get the specific problem;
const getProblem = function(id) {
    return new Promise((resolve, reject) => {
        ProblemModel.findOne({id: id}, (err, problem) => {
            if (err) {
                reject(err);
            } else {
                resolve(problem);
            }
        })
    });
}

// Add a new problem;
const addProblem = function(newProblem) {
    return new Promise((resolve, reject) => {
        // Check if this problem already exists;
        ProblemModel.findOne({name: newProblem.name}, (err, data) => {
            if (data) {
                reject("Problem is already existing!");
            } else {
                ProblemModel.count({}, (err, count) => {
                    newProblem.id = count + 1;
                    let mongoProblem = new ProblemModel(newProblem);
                    mongoProblem.save();
                    resolve(mongoProblem);
                })
            }
        })
    });
}


module.exports = {
    getProblems,
    getProblem,
    addProblem
};