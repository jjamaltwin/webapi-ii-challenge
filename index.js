const server = require('./server.js')

const express = require('express');
const DB = require ('./Database/db')






server.listen(4000, () => {
    console.log('\n*** Server Running on http://localhost:4000 ***\n');
  });
  
