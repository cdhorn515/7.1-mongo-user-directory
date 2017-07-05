var MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/cdcrobotdb', function(error, db){
  console.log(error);
  //col is short for collection
  // var col = db.collection('./models.user.js');
  // col.find({}).toArray(function(error, results){
  //   console.log(results);
    //if want to find only one:
//findOne({}, function(error, results){
// console.log(results);
// })
  // });
});
