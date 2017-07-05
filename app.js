// var MongoClient = require("mongodb").MongoClient;

var express = require('express');
var mustacheExpress = require('mustache-express');
// const path = require('path');
//this constant renames the object module.exports in the data.js file
// const data = require('./models/user');
var userController = require('./controllers/user');
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

//name of the view wanted to load--url will have /directory
app.get('/', userController.index);

//create another view to load, url will be /profile
app.get('/:id', userController.profile);

app.listen(3000, function(){
  console.log('successsfully started express app!');
});
