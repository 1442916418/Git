var app = angular.module('app', ['ngRoute', 'detailModule']);

app.controller('ctrl', function($scope, $http){
    $scope.search = 'a';
    $scope.order = 'name';
    $scope.rule = false;

    $http.get('phones/phones.json').then(function(g){
        console.log(g.data);
        $scope.phoneData = g.data;
    });
});

app.config(function($routeProvider){
    $routeProvider.when('/phonesIndex', {
        templateUrl: 'phoneIndex.html'
    }).when('/detail/:detName', {   // 参数： detName
        templateUrl: 'detail.html',
        controller: 'detailCtrl'
    }).otherwise({
        redirectTo: '/phonesIndex'
    })
});