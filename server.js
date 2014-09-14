var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send(app/index.html);
});

var server = app.listen(4567, function() {
    console.log('Listening on port %d', server.address().port);
});