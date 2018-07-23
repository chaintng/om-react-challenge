const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/*', function(req, res) {
  res.sendfile('index.html', {root: path.join(__dirname, '/build')});
});

app.listen(3000)