var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('/', function (req, res) {
    var contype = req.headers['content-type'];
    console.log(contype);

    var body = req.body;

    // This doesn't work with plex webhooks (mostly) due to them being multipart, rather than json.  Need to find a new body parser that can handle multipart.
    var event = body.event;

    console.log('Received Webhook');
    console.log(event);

    res.json({
        message: 'ack'
    });
});

app.listen(3000, function () {
    console.log('dirty-web-hooker listening on port 3000.');
});