const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const validator = require('express-validator');
const port = process.env.PORT || 3000;

/// SETUP MONGOOSE ///
const mongoose = require('mongoose');
const mongoDB = 'mongodb://mongo:27017';

mongoose.connect(mongoDB, {
  useMongoClient: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//////////////////////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(validator());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  next();
});

/// SETUP ROUTES ///
const index = require('./api/routes/index');
const api = require('./api/routes/api');
///////////////////

app.use('/', index);
app.use('/api', api);

app.listen(port);

console.log('OctoREST started on: ' + port);
