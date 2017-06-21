const express = require('express');
const mustacheExpress = require('mustache-express');
// const path = require('path');
//this constant renames the object module.exports in the data.js file
const data = require('./data.js');
const app = express();

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
app.get('/', function (req, res) {
  var context = data;
  res.render('index', context);
});

//create another view to load, url will be /profile
app.get('/:id', function(req, res){
  var robot;

  for(var i = 0; i < data.users.length; i++) {
    if(data.users[i].id == req.params.id) {
      robot = data.users[i];
    }
  }



  // var robotId = {};
  // console.log(req.params.id);
  // for (var i = 0; i<data.users.length; i++) {
  //   robotId = data.users[i];
  //   if (robotId.id == req.params.id) {
  //     console.log('here', robotId)
  //     break;
  //   }
  // }
  res.render('profile', robot);

});

app.listen(3000, function(){
  console.log('successsfully started express app!');
});
