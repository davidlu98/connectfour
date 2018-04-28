// Using some modules
var express = require('express');
var app = express();
var flash = require('express-flash');
var http = require('http');
var server = http.createServer(app).listen(32236);
var path = require('path');

// Static pages
app.use(express.static('./public'));
app.use(express.static('./game'));

// Parsing body
app.use(express.json());
app.use(express.urlencoded(
{
	extended:false
}));

// Flashing errors
app.use(flash());

app.use('/', function(req,res,next){
	console.log(req.method, 'request:', req.url);
	next();
});

app.get('/game', function(req,res){
	res.sendFile(path.join(__dirname + '/game/index.html'));
});

console.log('App is running on port 32236');