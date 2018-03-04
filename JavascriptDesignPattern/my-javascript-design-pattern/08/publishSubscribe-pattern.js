console.log("=========8.4 自定义事件==========");
(function() {
  var salesOffices = {};
  salesOffices.clientList = [];
  salesOffices.listen = function(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
  };
  salesOffices.trigger = function() {
    var key = Array.prototype.shift.call(arguments);
    var fns = this.clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }

    for (var i = 0; i < fns.length; i++) {
      fns[i].apply(this, arguments);
      // this.clientList[i](arguments);
    }
  };
  salesOffices.listen("squareMeter88", function(price) {
    console.log("明--价格", price);
  });
  salesOffices.listen("squareMeter110", function(price) {
    console.log("华--面积", price);
  });

  salesOffices.trigger("squareMeter88", 120);
  salesOffices.trigger("squareMeter110", 180);
})();

console.log("=========8.5 发布-订阅模式的通用实现==========");
console.log("=========8.6 取消订阅的事件==========");
(function() {
  // 将发布订阅功能提取出来
  var event = {
    clientList: [],
    listen: function(key, fn) {
      if (!this.clientList[key]) {
        this.clientList[key] = [];
      }
      this.clientList[key].push(fn);
    },
    trigger: function() {
      var key = Array.prototype.shift.call(arguments);
      var fns = this.clientList[key];
      if (!fns || fns.length === 0) {
        return false;
      }
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(this, arguments);
      }
    },
  };

  // copy一份发布订阅模式
  var installEvent = function(obj){
    for(var i in event){
      obj[i] = event[i]
    }
  }

  //调用方法
  var salesOffices = {};
  installEvent(salesOffices);

  salesOffices.listen("squareMeter88", function(price) {
    console.log("明--价格", price);
  });
  salesOffices.listen("squareMeter110", function(price) {
    console.log("华--面积", price);
  });

  salesOffices.trigger("squareMeter88", 120);
  salesOffices.trigger("squareMeter110", 180);

})();

console.log("=========8.6 取消订阅的事件==========");
(function() {
  var event = {
    clientList: [],
    listen: function(key, fn) {
      if (!this.clientList[key]) {
        this.clientList[key] = [];
      }
      this.clientList[key].push(fn);
    },
    trigger: function() {
      var key = Array.prototype.shift.call(arguments);
      var fns = this.clientList[key];
      if (!fns || fns.length === 0) {
        return false;
      }
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(this, arguments);
      }
    },
    remove: function(key, fn){
      var fns = this.clientList[key];
      if( !fns ){
        return false;
      }
      if( !fn ){
        fns && (fns.length = 0)
      }else{
        // for( var i = fns.length -1; i >= 0; i-- ){
        //   var _fn = fns[i];
        //   if( _fn === fn ){
        //     fns.splice(i, 1);
        //   }
        // }
        for(var i = 0; i<fns.length; i++){
          var _fn = fns[i];
          if( _fn === fn ){
            fns.splice(i, 1)
          }
        }

      }

    }
  };

  // copy一份发布订阅模式
  var installEvent = function(obj){
    for(var i in event){
      obj[i] = event[i]
    }
  }

  //调用方法
  var salesOffices = {};
  installEvent(salesOffices);

  salesOffices.listen("squareMeter88", fn1 = function(price) {
    console.log("明--价格", price);
  });
  salesOffices.listen("squareMeter110", fn2 = function(price) {
    console.log("华--面积", price);
  });

  salesOffices.remove("squareMeter110", fn2);
  salesOffices.trigger("squareMeter88", 8888);
  salesOffices.trigger("squareMeter110", 999);

})();

console.log("=========8.7 网站登录==========");
(function(){



})();

(function(){})();
(function(){})();

/**
 * 发布订阅模式 (观察者模式)
 * 1: 用在异步编程（是一种代替传递回掉函数的方案）
 * 2: 用作解耦....
 */
