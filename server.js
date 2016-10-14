// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./routing/html-routes');
var api = require('./routing/api-routes');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3010;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// routes
routes(app);
api(app);
// makes static assets in the public folder available (style.css)
app.use(express.static('public'));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});