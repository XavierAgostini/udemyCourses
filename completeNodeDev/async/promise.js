// function doWork (data, callback) {
// 	callback('done');
// }

// function doWorkPromise (data) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function() {
// 			reject('everything is broken');
// 		}, 1000);
// 		// resolve('everything worked!');
// 		// reject({
// 		// 	error: 'something bad happened'
// 		// });
// 	});
// }

// doWorkPromise('some data ').then(function(data) {
// 	console.log(data);
// }, function(error) {
// 	console.log(error);
// });

var request = require('request');
function getWeather(location) {
	return new Promise(function (resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodedLocation+'&units=metric&appid=2de143494c0b295cca9337e1e96b00e0';

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
	})
}

getWeather('Toronto').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error) {
	console.log('error');
})