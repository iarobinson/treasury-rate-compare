const parser = require('xml2json');
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname + '/index.html'))
);

app.get('/js/treasuryChart', (req, res) => 
  res.sendFile(path.join(__dirname + '/js/treasuryChart.js')
));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
