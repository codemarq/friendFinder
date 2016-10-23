module.exports = function (app) {
	// dependencies
	var path = require('path');
	var friends = require('../data/friends.js');

	// ================================================================
	// api-routes
	// ================================================================

	// 
	app.get('/api/friends', function (request, response) {
		
		response.json(friends);
	});

	app.post('/api/friends', function (req, response) {
		// friends.list.push(req);
		console.log(req.body);
		console.log(friends);

		
		
	});
};