// 自定义模块
angular.module('detailModule', []).controller('detailCtrl', function($scope, $routeParams, $http){
    // console.log($routeParams);
    $scope.phoneDet = null;
    
    var name = $routeParams.detName;
    var file = name + ".json";
    $http.get('phones/' + file).then(function(resp){
        $scope.prictureSrc = resp.data.images[0];
        $scope.phoneDet = resp.data;
    })
    
    $scope.tabPricture = function(t){
        $scope.prictureSrc = t.target.src;
    }
})