//Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

//Parse request body
app.use(bodyParser.json());

//Create comments array
let comments = [];

//Create GET endpoint to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

//Create POST endpoint to add a comment
app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.json(comments);
});

//Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// Path: experience-primer-copilot-JulesVoyer/index.js
//Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

//Parse request body
app.use(bodyParser.json());

//Create comments array
let comments = [];

//Create GET endpoint to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

//Create POST endpoint to add a comment
app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.json(comments);
});

//Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// Path: experience-primer-copilot-JulesVoyer/package.json
{
    "name": "experience-primer-copilot-JulesVoyer",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "node index.js"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "body-parser": "^1.19.0",
        "express": "^4.17.1"
    }
}