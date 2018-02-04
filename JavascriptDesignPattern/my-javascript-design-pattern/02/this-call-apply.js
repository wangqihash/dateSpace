console.log("=========2.1.1 this=========");
// 2.1.1 this
(function() {
  document.getElementById('div1').onclick = function() {
    console.log(this, "onclick");
    // var self = this;
    var callBack = function() {
      // if ('use strict') this => undefined  严格模式下 this不指向windows
      console.log(this, "callBack");
    };
    callBack.call(this); //改变 this指向
    // callBack();
  };

})();

console.log("=========2.1.1 构造函数中的this=========");
// 2.1.1 构造函数中的this
(function() {
  var MyClass = function() {
    this.sname = 'wq';
    return {
      sname: "wangqi"
    } // {sname: 'wangqi'}
    // return 'wangqi'   MyClass{'snmae': 'wq'}

    //return ['snmae']    ['sname']
  };
  var obj = new MyClass();
  console.log(obj);

})();

console.log("=========bind =>改变函数内的this指向=========");
// bind =>改变函数内的this指向
(function() {
  var getId = document.getElementById;
  // console.log(getId, "getId");
  // getId('div1');

  var obj = {
    sname: 'wangqi'
  };
  var func = function() {
    console.log(this.sname, "()=>{}.bind()")
  }.bind(obj);
  func();

})();

console.log("=========借用其他对象=========");
// 借用其他对象
(function() {
  var A = function(name) {
    this.name = name;
  };
  var B = function() {
    // console.log(this, "BBB");
    A.apply(this,arguments);
    // A.apply(this); //这里的arguments是传递的参数，因为 A 中有形参，所以 B 中是需要的
  };
  B.prototype.getName = function() {
    return this.name;
  };

  var b = new B('wq');
  console.log(b.getName() ,"借用其他对象");

})();

(function() {})();

(function() {})();
(function() {})();
