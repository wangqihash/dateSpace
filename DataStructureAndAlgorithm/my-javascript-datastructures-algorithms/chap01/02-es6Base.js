(function() {
  let sname = '2212122';
  if (true) {
    let sname = 'wq';
    sname = 'wangqi';
    console.log(sname); // wangqi
  }
  sname = '99';
  console.log(sname); // 99
})();

// [...a] 和 apply arguments的理解
(function() {
  function sum(x, y, z) {
    return x + y + z;
  };

  var params = [3, 4, 5];

  console.log(sum.apply(undefined, params));
  // console.log(sum.apply(this, params) );

  function restParamater(x, y, ...a) {
    console.log(...a, "...a");
    console.log(a.length, "a.lenght");
    return (x + y) * a.length;
  };
  console.log(restParamater(1, 2, 'h', true, 7));

})();

// 数组结构 => 互换位置，这对排序有意义
(function() {
  let [x, y] = ['a', 'b'];
  console.log([
    x, y
  ], `[x, y]`);
  [x, y] = [y, x];
  console.log([
    x, y
  ], `[x ,y]`);

})();

console.log("=========es6 用类进行面向对象编程===========");
(function() {
  class Book {
    constructor(title, pages, isbn) {
      this.title = title;
      this.pages = pages;
      this.isbn = isbn;
    }

    printIsbn() {
      return this.isbn
    };
  };
  let book = new Book('titleTag', 'page', 'bbttnn');

  console.log(book.title, "book.title");
  book.title = 'new Title';
  console.log(book.title, "book.title++");

  console.log(book.printIsbn(), "printIsbn");

  class ITBook extends Book {
    constructor(title, pages, isbn, last) {
      super(title, pages, isbn); // 通过super 关键字引用继承父类的构造函数 this.xx=cc的属性
      console.log(this, "this+")
      this.last = last; // 设置 自己特有的属性
      console.log(this, "this+")
    };

  };

  let itbook = new ITBook('学习js算法', '200', 'button', 'js设计模式');
  // console.log(itbook.title, "itbook.title")

})();

console.log("=========es5 中通过set get来实现 属性存储器===========");
(function() {

  var setStorage = (function() {
    var obj = {}; // 受保护变量
    return {
      get: function() {
        return obj
      },
      set: function(k, v) {
        obj[k] = v;
      }
    }
  })();
  // var newSetStorage = setStorage();   或者通过 赋值形成闭包
  // console.log(newSetStorage);
  // console.log(setStorage());
  // console.log(newSetStorage == setStorage());

  setStorage.set('age', 12);
  console.log(setStorage.get());

})();

console.log("=========es6 中通过set get来实现 属性存储器===========");
(function() {
  class Person {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }
    set name(value) {
      this._name = value;
    }
  }

  let lotrChar = new Person('Frodo');
  console.log(lotrChar.name);

  lotrChar.name = 'Gandalf';
  console.log(lotrChar.name);

  lotrChar._name = 'Sam';
  console.log(lotrChar.name);

})();
