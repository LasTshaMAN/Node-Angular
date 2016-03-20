var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    proposalsController = require('./server/controllers/proposals-controller');

app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/views', express.static(__dirname + '/client/views'));

//REST API
app.get('/api/proposals', proposalsController.list);
app.post('/api/proposals', proposalsController.create);

app.listen(3000, function () {
    console.log('I\'m Listening...');
});