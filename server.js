const parser = require('xml2json');
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname + '/index.html'))
);

app.get('/data/dtltrd.xml', function(req, res) {
  var xml = path.join(__dirname + '/data/dtltrd.xml');
  var json = parser.toJson(xml);
  res.sendFile(json);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
