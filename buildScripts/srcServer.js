var express = require('express');
var path = require('path');
var open = require('open');

var port = 8080;
var app = express();
app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(err){
if(err){
  debugger;
  console.log(err);
} else {
  debugger;
  open('http://localhost:'+port);
}
});
