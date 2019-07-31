const server = require('./server.js')

const express = require('express');

const Hubs = require('./data/hubs/hubs-model');





server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
