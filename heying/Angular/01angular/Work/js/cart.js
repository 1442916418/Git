var app = angular.module('app', []);

app.controller('ctrl', function ($scope, $filter, $http) {
    $scope.productList = [];
    $scope.order = 'number';
    $scope.rule = false;
    $scope.search = '100';
    // 总价排序
    $scope.totalPriceSort = function (own) {
        
    }
    // 排序
    $scope.sort = function (own) {
        console.log($scope.order);
        $scope.order = own.target.alt;
        if ($scope.rule == false) {
            $scope.rule = true;
            $(own.target).addClass('transform');
        }
        else {
            $scope.rule = false;
            $(own.target).removeClass('transform');
        }
    }
    // 请求数据
    $http.get('data/commodityData.json').then(function (com) {
        $scope.productList = com.data;
    });
    // 总价格
    $scope.totalPrice = function () {
        $scope.sum = 0;
        angular.forEach($scope.productList, function (value, index) {
            $scope.sum += value.count * value.unitPrice;
        });
        $scope.totalp = $scope.sum;
        return $filter('currency')($scope.sum, '￥');
    }
    // 总数量
    $scope.totalNumber = function () {
        $scope.serialNumber = 0;
        angular.forEach($scope.productList, function (value, index) {
            $scope.serialNumber += value.count;
        });
        return $scope.serialNumber;
    }
    // 加减
    $scope.operation = function (own, index, count) {
        $scope.n = index;
        $scope.productList[index].count = $scope.productList[index].count + count;
        
        if ($scope.productList[index].count <= 1) {
            $("#myModal").modal('show');
            $scope.delete = function () {
                $scope.productList.splice($scope.n, 1);
                $("#myModal").modal('hide');
            }
        }
        if ( $scope.productList[index].count == 1 )
        {
            $(own.target).attr('disabled','disabled');
        }
        else
        {
            $(own.target).removeAttr('disabled');
        }
    }
    // 删除单个商品
    $scope.deleteSingle = function (index) {
        $("#myModal").modal('show');
        $scope.delete = function () {
            $scope.productList.splice(index, 1);
            $("#myModal").modal('hide');
        }
    }
    // 清空购物车
    $scope.empty = function () {
        $('#myModalLabel').html('确定要抛弃你的整个人生吗？');
        $("#myModal").modal('show');
        $scope.delete = function () {
            $scope.productList = [];
            $("#table").hide();
            $("#myModal").modal('hide');
            $("#box").append("<h2 class='text-center'>购物车空空如也！！！</h2>");
        }
    }
});   