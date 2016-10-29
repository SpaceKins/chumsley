const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile('/public/index.html');
})


const server = app.listen(3000,function(){
  var port = server.address().port;

  console.log('Listening on port ' + port);
})