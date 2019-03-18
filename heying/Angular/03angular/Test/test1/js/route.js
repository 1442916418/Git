var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/user/login',{
        // template: '<form><input type="text"><input type="password"><input type="button" value="登录"></form>'
        templateUrl: '../user/login.html'
    }).when('/user/reg', {
        // template: '<form><input type="text"><input type="password"><input type="button" value="注册d"></form>'
        templateUrl: '../user/register.html'
    }).when('/', {
        redirectTo: '/user/login'
    }).otherwise({
        redirectTo: '/'
    })
});