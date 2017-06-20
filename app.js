const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
//this constant renames the object module.exports in the data.js file
const data = require('./data.js');
const app = express();

//set up where to find css files
app.use('/public', express.static(path.join(__dirname, '/public/')));
//set up template named mustache
app.engine('mustache', mustacheExpress());

//view engine is set to engin that was named above
app.set('view engine', 'mustache');

//telling express where to view our files--they are in the views folder
app.set('views', './views');

//name of the view wanted to load--url will have /directory
app.get('/directory', function (req, res) {
  var context = data;

  res.render('directory', context);

});

app.listen(3000, function(){
  console.log('successsfully started express app!');
});
