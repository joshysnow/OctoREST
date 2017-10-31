const express = require('express');
//const uniqid = require('uniqid');
const app = express();
//const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
//const fs = require("fs");

//app.use(bodyParser.json());

const index = require('./api/routes/index');
const api = require('./api/routes/api');

app.use('/', index);
app.use('/api', api);

/*app.get('/users', function(req, res) {
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err,data){
    console.log(data);
    res.end(data);
  });
});

app.get('/', (req, res) => {
  res.send ('Welcome to our API');
});

app.post('/users', function (req, res){
  const inputData = req.body;
  let id;

  fs.readFile('users.json', function (err, data){
      var json = JSON.parse(data);
      id = uniqid();
      console.log(json);
      json[id] = inputData;

      fs.writeFile("users.json", JSON.stringify(json));
  })

  res.send({'id': id});
});*/

app.listen(port);

console.log('OctoREST started on: ' + port);
