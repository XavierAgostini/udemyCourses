// Servides

app.service('cityService', function() {
    this.city = "New York, NY";
});

app.service('weatherService', ['$resource', function($resource) {
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=67d48588b55df0cf8601433fe5d9b635", {
                callback: "JSON_CALLBACK" }, {
                get: { method: "JSONP" }
            }
        );
        return weatherAPI.get({q: city, cnt: days});
    };

}]);