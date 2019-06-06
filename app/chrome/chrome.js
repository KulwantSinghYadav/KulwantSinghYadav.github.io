'use strict';

angular.module('myApp.chrome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chrome', {
    templateUrl: 'chrome/chrome.html',
    controller: 'ChromeCtrl'
  });
}])

.controller('ChromeCtrl', [function() {

}]);