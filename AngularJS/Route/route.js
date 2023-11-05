var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
    templateUrl : "home.html"
    })
    .when("/red", {
    templateUrl : "dashboard.html"
    })
    .when("/green", {
    templateUrl : "menu.html"
    })
});
