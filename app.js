
var express = require('express');
var mustacheExpress = require('mustache-express');
// const path = require('path');
//this constant renames the object module.exports in the data.js file
// const data = require('./models/user');
var userController = require('./controllers/user');
var MongoClient = require('mongodb').MongoClient;

var app = express();

//set up where to find css files using a direct path
app.use(express.static('public'));
// app.use(express.static('/public'));
//set up template named mustache
app.engine('mustache', mustacheExpress());

//view engine is set to engin that was named above
app.set('view engine', 'mustache');

//telling express where to view our files--they are in the views folder
app.set('views', './views');

app.use(function(req, res, next) {
  MongoClient.connect('mongodb://localhost:27017/cdcrobotdb', function(errors, db){
    req.db = db;
    next();
  });

});

//name of the view wanted to load--url will have /directory
app.get('/', userController.index);

//create another view to load, url will be /profile
app.get('/:id', userController.profile);

app.post('/employed', userController.employedRobot);

app.post('/unemployed', userController.unemployedRobot);

app.listen(3000, function(){
  console.log('successsfully started express app!');
});
