// Setup and Endpoints 

const express = require('express');
const HubsRouter = require('./data/hubs/hubs-router');
const server = express();



server.use(express.json());
server.use('/api/hubs', HubsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Database API</h>
    <p>Welcome to the Lambda Database API</p>
  `);
});



module.exports = server;