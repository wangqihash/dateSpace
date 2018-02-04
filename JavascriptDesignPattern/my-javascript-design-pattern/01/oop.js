//1.4.1 使用克隆的原型模式
//
console.log('========1.4.1 使用克隆的原型模式========');
(function() {
  var Plane = function() {
    this.blond = 100;
    this.atta = 1;
  };
  Plane.prototype = {
    sname: function() {
      console.log("sname")
    }
  };
  var plane = new Plane()
  plane.blond = 200;
  plane.atta = 12;

  // 这种可能会存在兼容性
  Object.create = function(obj) { // {}=> 注意这里使用的是 Object-create , F构造函数名封装没了
    var F = function() { // 如果是第二个条件这里会独处 构造函数名字，以及私有属性
      this.newSname = 'F'
    };
    F.prototype = obj;
    return new F();
  }
  var clonePlane = Object.create(plane);
  console.log(clonePlane, "clonePlane");
  console.log(clonePlane.blond, `clonePlane.blond`);
})();

console.log('========1.4.4原型模式和基于原型继承的js对象系统========');
// 1.4.4原型模式和基于原型继承的js对象系统
//
(function() {

  function Animal() {
    this.sname = 'wq'
  };
  Animal.prototype = {
    makeSound: function() {
      console.log('叫!!');
    }
  };
  var animal = new Animal();

  function Dog() {};
  Dog.prototype = Animal;
  // Dog.prototype = Animal.prototype;   注意理解这里的继承不同，结果也不同， 理解原型图
  var dog = new Dog();

  console.log(dog);
  console.log(dog.__proto__) // Animal 构造函数
  console.log(dog.prototype) // Animal.prototype   => 可以理解成 由于dog.__proto__ 继承Animal.prototype

})();

console.log('========1.4.5 js中的原型继承========');
// 1.4.5 js中的原型继承
//
(function() {
  var obj = {};
  console.log(Object.getPrototypeOf(obj) === Object.prototype);

  //  es6 实现继承
  class Animal {
    constructor(name) {
      this.name = name;
    };
    getName() {
      return this.name
    }
  };

  class Dog extends Animal {
    constructor(name) {
      super(name);
    };
    speak() {
      return 'Dog返回'
    }
  };

  var dog = new Dog('参数');
  console.log(dog.getName(), "+++", dog.speak());

})();

console.log("=========github1==========");
(function() {
  /**
   * [description]
   * 理解 为 A.prototype ={ n ,{ n:2,m:3} }
   * 在var b = new A() 原型中的东西【不论原始还是引用的】 这时都已经 开辟好空间了
   */
  var A = function() {}
  A.prototype.n = 1
  var b = new A()
  A.prototype = {
    n: 2,
    m: 3
  }

  // A.prototype.n = 11
  // A.prototype.m = 12
  console.log(b, "b"); // __proto__ => n:1

  var c = new A();
  // A.prototype = {  彻底=>明白为啥 A.prototype一定要在new实例之前了，不然这就白写了。
  //   n: 2,
  //   m: 3
  // }
  console.log(c, "c"); // __proto__ => {}
  console.log(b.n, b.m, c.n, c.m) // 2 3 2 3

})();
console.log("=========github2==========");
(function() {
  var F = function() {
    // this.b = function(){console.log("123")}
};
  Object.prototype.a = function() {
    console.log('a()')
  };
  Function.prototype.b = function() {
    console.log('b()')
  };
  var f = new F();
  console.log(f.__proto__,"fff")  //
  // console.log(f.prototype,"fff") // undefined
  f.a()
  // f.b()
  F.a()
  F.b()

})();

(function() {})();
(function() {})();
(function() {})();
