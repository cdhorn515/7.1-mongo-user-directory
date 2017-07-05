// var data = require('../models/user');
var data = require('../datascript.js');

module.exports = {
  index: function (req, res) {
    var context = data;
    res.render('index', context);
  },
  profile: function (req, res) {
    var robot;
    for(var i = 0; i < data.users.length; i++) {
      if(data.users[i].id == req.params.id) {
        robot = data.users[i];
      }
    }  res.render('profile', robot);
  }
};
