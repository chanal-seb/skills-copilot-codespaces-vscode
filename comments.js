// Create web server
// Create a route to get comments
// Create a route to post comments

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
  comments.postComment(req.body);
  res.status(201).send();
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});