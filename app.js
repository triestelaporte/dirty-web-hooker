var express = require('express');
var multer = require('multer');
//var request = require('request');

var upload = multer({dest: '/tmp/'});
var app = express();

app.post('/', upload.single('thumb'), function (req, res, next) {
    console.log('Received Raw Webhook:  ');
    console.log(req);

    var body = JSON.parse(req.body.payload);
    var event = body.event;

    console.log('Detected Event:  ' + event);
    console.log('Got Body:  ');
    console.log(body);

    res.json({
        message: 'ack'
    });
});

app.listen(3000, function () {
    console.log('dirty-web-hooker listening on port 3000.');
});