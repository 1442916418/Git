// 自定义模块 detailModule
// 创建控制器 detailCtrl
angular.module('detailModule', []).controller('detailCtrl', function($scope, $routeParams, $http){
  // console.log($routeParams);
  $scope.book = null;
  // 获得参数
  var id = $routeParams.proId;
  var file = id+'.json';
  $http.get('data/'+file).then(function(resp){
    console.log(resp.data);
    $scope.book = resp.data 
  });
});