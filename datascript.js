var MongoClient = require("mongodb").MongoClient;
var data = require('./models/user');

MongoClient.connect('mongodb://localhost:27017/cdcrobotdb', function(error, db){
  console.log(error);
  //col is short for collection
  var col = db.collection('robots');
  data.users.forEach(function(user){
   col.insert(user);
 });
  // col.find({}).toArray(function(error, results){
  //   console.log(results);
    //if want to find only one:
//findOne({}, function(error, results){
// console.log(results);
// });
  // });
});
