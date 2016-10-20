module.exports = function (app) {
	// dependencies
	var path = require('path');
	var friends = require('../data/friends.js');

	// ================================================================
	// api-routes
	// ================================================================

	// 
	app.get('/api/friends', function (request, response) {
		response.status(200).json({message: 'Successfully connected!'});
		response.json(friends);
	});



};