
var app = new Vue({

    el: '#app',
  
    data: {
  
      list: [
  
        [{
  
          id: 1,
  
          name: 'iphone 7',
  
          price: '6188',
  
          count: 1,
  
          isBuy: false,
  
          cls: 'Eletronic Products'
  
        }, {
  
          id: 2,
  
          name: 'ipad Pro',
  
          price: '5888',
  
          count: 1,
  
          isBuy: false
  
        }, {
  
          id: 3,
  
          name: 'macbook pro',
  
          price: '21488',
  
          count: 1,
  
          isBuy: false
  
        }],
  
        [{
  
          id: 4,
  
          name: 'T-shirt',
  
          price: '150',
  
          count: 1,
  
          isBuy: false,
  
          cls: 'Daily Use'
  
        }, {
  
          id: 5,
  
          name: 'cup',
  
          price: '10',
  
          count: 2,
  
          isBuy: false
  
        }, {
  
          id: 6,
  
          name: 'dish',
  
          price: '30',
  
          count: 1,
  
          isBuy: false
  
        }],
  
        [{
  
          id: 7,
  
          name: 'apple',
  
          price: '3',
  
          count: 5,
  
          isBuy: false,
  
          cls: 'Garden Stuff'
  
        }, {
  
          id: 8,
  
          name: 'watermelon',
  
          price: '15',
  
          count: 1,
  
          isBuy: false
  
        }, {
  
          id: 9,
  
          name: 'cabbage',
  
          price: '5',
  
          count: 1,
  
          isBuy: false
  
        }]
  
      ],
  
      checkBoxModel: [],
  
      allp: false
  
    },
  
    computed: {
  
      totalPrice: function () {
  
        var total = 0;
  
   
  
        for (var i = 0; i < this.list.length; i++) {
  
          for (var j = 0; j < this.list[i].length; j++) {
  
            var itemp = this.list[i][j];
  
            if (itemp.isBuy) {
  
              total += itemp.price * itemp.count;
  
            }
  
          }
  
        }
  
        return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
  
      }
  
    },
  
    methods: {
  
      handleReduce: function (index, inindex) {
  
        if (this.list[index][inindex].count === 1) return;
  
        this.list[index][inindex].count--;
  
      },
  
      handleAdd: function (index, inindex) {
  
        this.list[index][inindex].count++;
  
      },
  
      handleRemove: function (index, inindex) {
  
        this.list[index].splice(inindex, 1);
  
      },
  
      allPick: function () {
  
        var _this = this;
  
        if (_this.allp) {
  
          _this.checkBoxModel = [];
  
          _this.allp = false;
  
        } else {
  
          _this.checkBoxModel = [];
  
          for (var i = 0; i < _this.list.length; i++) {
  
            _this.list[i].forEach(function (item) {
  
              _this.checkBoxModel.push(item.id);
  
            });
  
          }
  
          _this.allp = true;
  
        }
  
      },
  
      clsallPick: function () {
  
       
  
      },
  
      pickOne: function (index, inindex) {
  
        if (this.list[index][inindex].isBuy) {
  
          this.list[index][inindex].isBuy = false;
  
        } else {
  
          this.list[index][inindex].isBuy = true;
  
        }
  
      },
  
      checkPick: function () {
  
        _this = this;
  
        var sumPic = 0;
  
        var alength = 0;
  
        for (var i = 0; i < _this.list.length; i++) {
  
          for (var j = 0; j < _this.list[i].length; j++) {
  
            if (_this.list[i][j].isBuy) {
  
              sumPic++;
  
            }
  
          }
  
          alength += _this.list[i].length
  
        }
  
        if (sumPic == alength) {
  
          _this.allp = true;
  
          console.log('all pick');
  
        } else {
  
          _this.allp = false;
  
        }
  
      },
  
      clas: function (index) {
  
        for (var j = 0; j < this.list.length; j++) {
  
          if (index === j) {
  
            return this.list[j][0].cls;
  
          }
  
        }
  
      },
  
      checkModel: function () {
  
        _this = this;
  
        if (_this.checkBoxModel.length) {
  
          newArr = _this.checkBoxModel.concat();
  
          //console.log(newone);
  
          for (var i = 0; i < _this.list.length; i++) {
  
            for (var j = 0; j < _this.list[i].length; j++) {
  
              var newone = newArr.shift();
  
              if (_this.list[i][j].id === newone) {
  
                _this.list[i][j].isBuy = true;
  
              }
  
            }
  
          }
  
        } else {
  
          for (var i = 0; i < _this.list.length; i++) {
  
            for (var j = 0; j < _this.list[i].length; j++) {
  
              _this.list[i][j].isBuy = false;
  
            }
  
          }
  
        }
  
      }
  
    },
  
    created() {
  
      _this = this;
  
      _this.checkModel();
  
      console.log(_this.list[1][2].name);
  
    }
  
  });
  