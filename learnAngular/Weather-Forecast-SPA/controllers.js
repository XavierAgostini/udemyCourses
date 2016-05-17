// Controllers
app.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
    $scope.submit = function() {
        $location.path("/forecast");
    }
}]);

app.controller('forecastController', ['$scope', '$routeParams','cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=london&units=metric&cnt=2&APPID=67d48588b55df0cf8601433fe5d9b635';


    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8*(degK -273)) +32);
    };

    $scope.convertToDate = function(dt) {
        return new Date(dt*1000);
    };
}]);