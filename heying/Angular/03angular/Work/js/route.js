var app = angular.module('app', ['ngRoute', 'detailModule']);

app.controller('ctrl', function($scope, $http){
    $http.get('phones/phones.json').then(function(g){
        $scope.phoneData = g.data;

        // console.log($scope.phoneData);
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