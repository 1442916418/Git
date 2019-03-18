// 自定义模块
angular.module('detailModule', []).controller('detailCtrl', function($scope, $routeParams, $http){
    // console.log($routeParams);
    $scope.phoneDet = null;

    var name = $routeParams.detName;
    var file = name + ".json";
    $http.get('phones/' + file).then(function(resp){
        console.log(resp.data);

        $scope.phoneDet = resp.data;
    })
})