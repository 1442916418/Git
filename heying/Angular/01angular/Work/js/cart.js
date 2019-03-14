var app = angular.module('app', []);

app.controller('ctrl', function ($scope) {
    $scope.productList = [
        { "number": 1003, "name": "iphone4", "count": 3, "unitPrice": 4300 },
        { "number": 3300, "name": "iphone5", "count": 30, "unitPrice": 3300 },
        { "number": 232, "name": "mac", "count": 4, "unitPrice": 23000 },
        { "number": 1000, "name": "ipad", "count": 5, "unitPrice": 6900 }
    ];
    // 总价格
    $scope.totalPrice = function () {
        var sum = 0;
        for (var i = 0; i < $scope.productList.length; i++) {
            sum += $scope.productList[i].count * $scope.productList[i].unitPrice;
        }
        return sum;
    }
    // 总数量
    $scope.totalNumber = function () {
        var number = 0;
        for (var i = 0; i < $scope.productList.length; i++) {
            number += $scope.productList[i].count;
        }
        return number;
    }
    // 加减
    $scope.operation = function (index, count) {
        var n = index;
        $scope.productList[index].count = $scope.productList[index].count + count;

        if ($scope.productList[index].count <= 1) {
            $("#myModal").modal('show');
            $scope.delete = function () {
                $scope.productList.splice(n, 1);
                $("#myModal").modal('hide');
            }
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