import express from'express';
import path from'path';
import open from'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware') (compiler,{
  publicPath: config.output.publicPath
}));

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
