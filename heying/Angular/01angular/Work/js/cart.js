var app = angular.module('app', []);

app.controller('ctrl', function ($scope, $filter, $http) {
    $scope.productList = [];
    $scope.order = 'number';
    $scope.rule = false;
    $scope.search = '0';
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
        // 数据源
        $scope.productList = com.data.records;
        // 分页总数
        $scope.pageSize = 5;
        // 分页数
        $scope.pages = Math.ceil($scope.productList.length / $scope.pageSize);
        $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
        $scope.pagesList = [];
        $scope.selPage = 1;
        // 设置表格数据源（分页）
        $scope.setData = function () {
            // 通过当前页数筛选出表格当前显示数据
            $scope.items = $scope.productList.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));
        }
        $scope.items = $scope.productList.slice(0, $scope.pageSize);
        // 分页repeat的数组
        for (var i = 0; i < $scope.newPages; i++) {
            $scope.pagesList.push(i + 1);
        }
        // 打印当前选中页索引
        $scope.selectPage = function (page) {
            // 不能小于1大于最大
            if (page < 1 || page > $scope.pages) return;
            // 最多显示页数5
            if (page > 2) {
                // 因为只显示5个页数，大于2页开始分页转换
                var newpageList = [];
                for (var i = (page - 3); i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)); i++) {
                    newpageList.push(i + 1);
                }
                $scope.pagesList = newpageList;
            }
            $scope.selPage = page;
            $scope.setData();
            $scope.isActivePage(page);
            console.log("选择的页", page);
        };
        // 设置当前选中页样式
        $scope.isActivePage = function (page) {
            return $scope.selPage == page;
        };
        // 上一页
        $scope.previous = function () {
            $scope.selectPage($scope.selPage - 1);
        };
        // 下一页
        $scope.next = function () {
            $scope.selectPage($scope.selPage + 1);
        }
    });
    // 总价格
    $scope.totalPrice = function () {
        $scope.sum = 0;
        angular.forEach($scope.productList, function (value, index) {
            $scope.sum += value.count * value.unitPrice;
        });
        $scope.totalp = $scope.sum;
        return $filter('currency')($scope.sum, '￥');
    };
    // 总数量
    $scope.totalNumber = function () {
        $scope.serialNumber = 0;
        angular.forEach($scope.productList, function (value, index) {
            $scope.serialNumber += value.count;
        });
        return $scope.serialNumber;
    };
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
        if ($scope.productList[index].count == 1) {
            $(own.target).attr('disabled', 'disabled');
        }
        else {
            $(own.target).removeAttr('disabled');
        }
    };
    // 删除单个商品
    $scope.deleteSingle = function (index) {
        $("#myModal").modal('show');
        $scope.delete = function () {
            $scope.productList.splice(index, 1);
            $("#myModal").modal('hide');
        }
    };
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
    };
});   