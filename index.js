/*test app for the android app*/

var express = require('express');
var app = express();
var port = 5000;

app.get('/content/test-uuid', function(req, res) {
    res.send('response sent');
});

app.listen(port, function() {
    console.log('server listening on port ' + port);
});