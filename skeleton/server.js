/* MongoDB Zoo (18.2.3)
 * =================== */




// STUDENTS: See near the bottom of this file for your TODO assignment. 

// Good luck!





// Dependencies
// 1: Intialize Express
var express = require('express');
var app = express();

// 2. Database configuration
// require mongojs, then save the url of our database 
// as well as the name of our collection
var mongojs = require('mongojs');
var databaseUrl = "zoo";
var collections = ["animals"];

// use mongojs to hook the database to the db variable 
var db = mongojs(databaseUrl, collections);

// this makes sure that any errors are logged if mongodb runs into an issue
db.on('error', function(err) {
  console.log('Database Error:', err);
});


// TODO: Make four routes that display results from your zoo collection

// 0: Root: Displays a simple "Hello World" message (no mongo required).
app.get('/', function(req, res) {
  res.send('hello world');
})

// 1: All: show every animal in a json

app.get('/all', function(req, res) {
  db.animals.find(function (err, docs) {
    res.send(docs)
  });
})
// 2: Name: sort results by name in ascending order, in a json

app.get('/name', function(req, res) {
  db.animals.find().sort({name: 1}, function (err, docs) {
    res.send(docs);
  })
})
// 3: Weight: sort results by weight in descending order, in a json

app.get('/weight', function(req, res) {
  db.animals.find().sort({weight: -1}, function (err, docs) {
    res.send(docs);
  })
})

// set app to run at port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!');
});