var request = require('request');

module.exports = function (location) {
	return new Promise(function (resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodedLocation+'&units=metric&appid=67d48588b55df0cf8601433fe5d9b635';

		if (!location) {
			return reject('No location provided!');
		}
		// callback('Here is the current weather');
		request({
			url: url, 
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('unable to fetch weather');
			} else {
				// console.log(typeof body);
				// console.log(JSON.stringify(body, null, 4));
				resolve('It is ' + body.main.temp +' degrees in ' + body.name);
			}
		});
	});
}

