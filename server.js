const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

const port = process.env.PORT || 5001

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

app.listen(port, () => {
    console.log('Server Started on ' + process.env.PORT);
});