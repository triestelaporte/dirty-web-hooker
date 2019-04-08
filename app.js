var express = require('express');
var multer = require('multer');
var request = require('request');

var upload = multer({dest: '/tmp/'});
var app = express();

app.post('/', upload.single('thumb'), function (req, res, next) {
    var contype = req.headers['content-type'];
    var event = '';
    var body = {};

    if (contype.includes('multipart/form-data')) {
        console.log('Detected Multipart Form Data');
        body = JSON.parse(req.body.payload);
        event = body.event;
    }

    console.log('Detected Event:  ' + event);
    console.log('Got Body:  ' + body);

    res.json({
        message: 'ack'
    });
});

app.listen(3000, function () {
    console.log('dirty-web-hooker listening on port 3000.');
});