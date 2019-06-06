var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/home", {
        templateUrl : "/home/home.html"
    })
    .when("/green", {
        templateUrl : "projects.html"
    })
    .when("/blue", {
        templateUrl : "contact.html"
    });
});