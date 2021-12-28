import express from'express';
import path from'path';
import open from'open';

const port = 8080;
const app = express();
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
