var express = require('express');
var app = express();

app.get('/',function(req,res) {
  console.log('Running ...');
  res.send("Hello World");
});
console.log('Running ...');
app.listen(4000);
