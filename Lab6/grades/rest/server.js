var express     = require('express');
var bodyParser  = require('body-parser');

var app         = express(); // Please do not remove this line, since CLI uses this line as guidance to import new controllers

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

var gradesController = require('./controllers/gradesController.js');
app.use('/api/grades', gradesController);

app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});