var data = require('../models/user');
// var MongoClient = require("mongodb").MongoClient;


module.exports = {

  index: function (req, res) {
      var context = {};
    // MongoClient.connect("mongodb://loccalhost:27017/cdcrobotdb", (function(errors, db){
      //need req if using in middleware in app.js
      var col = req.db.collection('robots');
      col.find({}).toArray(function(error,results){
        console.log(error, results);
        //setting model on context var --use in mustache template
        context.model = results;
        res.render('index', context);

      });
    // }
  },
  profile: function (req, res) {
    var robot;
    for(var i = 0; i < data.users.length; i++) {
      if(data.users[i].id == req.params.id) {
        robot = data.users[i];
      }
    }  res.render('profile', robot);
  },
  employedRobot: function (req, res) {
    var col = req.db.collection('robots');

  col.find({}, {job:1}).toArray(function(error, results){
    console.log(results);
    context.model = results;
    res.render('employed', context);
  });
},
unemployedRobot: function (req, res) {
  var col = req.db.collection('robots');

  col.find({}, {job:0}).toArray(function(error, results){
    context.model = results;
    res.render('unemployed', context);
});
}
};
