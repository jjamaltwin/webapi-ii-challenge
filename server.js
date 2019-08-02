const express = require('express');
const server = express();
const DataRouter = require('./Database/db-router');



server.use(express.json());
server.use('/api', DataRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Database API</h>
    <p>Welcome to the Lambda Database API</p>
  `);
});

module.exports = server;