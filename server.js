var express = require('express');
var app = express();


var server = app.listen(4567, function() {
    console.log('Listening on port %d', server.address().port);

    app.use(express.static('public'));
});