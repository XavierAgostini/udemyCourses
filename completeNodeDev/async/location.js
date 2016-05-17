var request = require('request');
var url = 'http://wwww.ipinfo.io';

module.exports = function () {
	return new Promise(function (resolve, reject) {
		request({
			url: url,
			json: true
		}, function (error, res, body) {
			if (error) {
				reject('Unable to guess location');
			} else {
				resolve(body);
			}
		});
	});
}