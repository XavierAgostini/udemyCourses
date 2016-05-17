var myApp = angular.module('myApp', ['ngMessages','ngResource', 'ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
    .when('/second/', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
	.when('/second/:num', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
});

myApp.service('nameService', function () {
    var self = this;
    this.name = "Billy";
    this.nameLength = function () {
        return self.name.length;
    }
});

myApp.controller('mainController', ['$scope', '$location', '$log', 'nameService', function($scope, $location, $log, nameService) {
  $scope.persons = [
      {
        name: 'Bob Dole',
        address: '555 Main St., New York, NY 11111'
      },
      {
          name: 'Jane Dole',
          address: '555 Main St., New York, NY 11111'
      },
      {
          name: 'Jill Dole',
          address: '555 Main St., New York, NY 11111'
      }
  ];

}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', 'nameService', function($scope, $location, $log, $routeParams, nameService) {
    
}]);

myApp.directive("searchResult", function() {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personObject: "="
        },
        transclude: true

        //link: function (scope, elements, attrs) {
        //    console.log("Linking...");
        //    if(scope.personObject.name=="Jane Dole") {
        //        elements.removeAttr('class');
        //    }
        //
        //    console.log(elements.html());
        //}

   }
});

