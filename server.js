var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  var fs = require("fs");

  app.get('/users', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err,data){

      console.log(data);
      res.end(data);
    });
  });
  app.get('/', (req, res) => {
    res.send ('Welcome to our API');
  });
  app.listen(port);

  console.log('OctoREST started on: ' + port);
